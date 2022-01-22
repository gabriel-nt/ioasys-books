import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { useAuth } from '../hooks/auth';

import Card from '../components/Card';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';

import {
  Container,
  Content,
  CardsContainer,
  LoadingContainer,
} from '../styles/pages/home';

interface Book {
  title: string;
  id: string;
  imageUrl: string;
  publisher: string;
  published: string;
  pageCount: string;
  authors: Array<string>;
}

interface Pagination {
  totalPages: number;
}

const Home: NextPage = () => {
  const router = useRouter();
  const { getRefreshToken, signOut } = useAuth();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [books, setBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    async function getBooks() {
      try {
        await getRefreshToken();

        const { data } = await api.get('/books', {
          params: {
            page,
            amount: 12,
          },
        });

        setIsLoading(false);
        setBooks(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        signOut();
        router.push('/');
      }
    }

    getBooks();
  }, [page]);

  const handlePagination = (newPage: number) => {
    setIsLoading(true);
    setPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <Content>
          <Header mode="dark" />
          {isLoading ? (
            <LoadingContainer>
              <Loader />
            </LoadingContainer>
          ) : (
            <CardsContainer>
              {books.map(book => (
                <Card key={book.id} book={book} />
              ))}
            </CardsContainer>
          )}

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            handlePagination={handlePagination}
          />
        </Content>
      </Container>
      <Modal isOpen={showModal} onRequestClose={handleCloseModal} />
    </>
  );
};

export default Home;

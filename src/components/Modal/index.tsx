import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { api } from '../../services/api';

import { Button } from '../Button';
import ItemDetail from '../ItemDetail';
import Loader from '../Loader';

import {
  Container,
  Content,
  Summary,
  ImageContainer,
  LoaderContainer,
  DetailsContainer,
} from './styles';

interface ModalProps {
  idBook: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

interface BookProps {
  title: string;
  id: string;
  imageUrl: string;
  publisher: string;
  published: number;
  pageCount: number;
  authors: Array<string>;
  category: string;
  description: string;
  language: string;
  isbn10: string;
  isbn13: string;
}

const Modal = ({ idBook, isOpen, onRequestClose }: ModalProps) => {
  const [detailsBook, setDetailsBook] = useState<BookProps>({} as BookProps);
  const [widthWindow, setWidthWindow] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function getCurrentBook() {
      try {
        const response = await api.get(`/books/${idBook}`);
        setDetailsBook(response.data);
        setIsLoading(false);
      } catch (error) {
        handleCloseModal();
        console.warn(error);
      }
    }

    handleResize();
    getCurrentBook();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [idBook]);

  const handleResize = () => {
    const { innerWidth: width } = window;
    setWidthWindow(width);
  };

  const handleCloseModal = useCallback(() => {
    onRequestClose();
  }, [onRequestClose]);

  return (
    <Container
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Button
        type="button"
        hover={false}
        onClick={onRequestClose}
        aria-label="Fechar modal"
      >
        <RiCloseFill />
      </Button>

      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <Content>
          <ImageContainer>
            {detailsBook.imageUrl ? (
              <Image
                src={detailsBook.imageUrl}
                layout="fixed"
                width={widthWindow > 468 ? 349 : 240}
                height={widthWindow > 468 ? 513 : 351}
                alt={detailsBook.title}
              />
            ) : (
              <Image
                src="/images/default.png"
                layout="fixed"
                width={widthWindow > 468 ? 349 : 240}
                height={widthWindow > 468 ? 513 : 351}
                alt={detailsBook.title}
              />
            )}
          </ImageContainer>
          <DetailsContainer>
            <h2>{detailsBook.title}</h2>
            <span>
              {detailsBook.authors ? (
                <span>{detailsBook.authors.join(', ')}</span>
              ) : (
                <span>Autor(es) desconhecido(s)</span>
              )}
            </span>

            <div className="info">
              <h3>Informações</h3>

              <ItemDetail title="Páginas" label={detailsBook.pageCount} />
              <ItemDetail title="Editora" label={detailsBook.publisher} />
              <ItemDetail title="Publicação" label={detailsBook.published} />
              <ItemDetail title="Idioma" label={detailsBook.language} />
              <ItemDetail title="Título Original" label={detailsBook.title} />
              <ItemDetail title="ISBN-10" label={detailsBook.isbn10} />
              <ItemDetail title="ISBN-13" label={detailsBook.isbn13} />
            </div>

            <Summary>
              <h3>Resenha da Editora</h3>
              <p>
                <q>{detailsBook.description}</q>
              </p>
            </Summary>
          </DetailsContainer>
        </Content>
      )}
    </Container>
  );
};

export default Modal;

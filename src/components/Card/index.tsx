import Image from 'next/image';

import {
  Container,
  Title,
  Authors,
  Description,
  ImageContainer,
} from './styles';

interface Book {
  title: string;
  id: string;
  imageUrl: string;
  publisher: string;
  published: string;
  pageCount: string;
  authors: Array<string>;
}

interface CardProps {
  book: Book;
}

const Card = ({
  book: { authors, published, title, pageCount, imageUrl, publisher },
}: CardProps) => {
  return (
    <Container>
      <ImageContainer>
        {imageUrl ? (
          <Image
            src={imageUrl}
            layout="fixed"
            width={82}
            height={122}
            className="image"
          />
        ) : (
          <Image
            src="/images/default.png"
            layout="fixed"
            width={82}
            height={122}
          />
        )}
      </ImageContainer>

      <div className="content">
        <Title>{title ?? 'Livro desconhecido'}</Title>
        <Authors>
          {authors.length > 2 ? (
            <>
              <span>{authors[0]}</span>
              <span>e outros {authors.length - 1} autores</span>
            </>
          ) : authors.length >= 1 ? (
            <>
              {authors.map(author => (
                <span key={author}>{author}</span>
              ))}
            </>
          ) : (
            <span>Autor desconhecido</span>
          )}
        </Authors>
        <Description>
          <span>{pageCount} páginas</span>
          <span>Editora {publisher}</span>
          <span>Publicado em {published}</span>
        </Description>
      </div>
    </Container>
  );
};

export default Card;

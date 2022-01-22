import Image from 'next/image';
import { RiCloseFill } from 'react-icons/ri';

import { Button } from '../Button';
import { ItemDetail } from '../ItemDetail';

import { Container, Content, Summary, ImageContainer } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal = ({ isOpen, onRequestClose }: ModalProps) => {
  return (
    <Container
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Button type="button" hover={false} onClick={onRequestClose}>
        <RiCloseFill />
      </Button>

      <Content>
        <ImageContainer>
          <Image
            src="/images/default.png"
            layout="fixed"
            width={349}
            height={513}
          />
        </ImageContainer>
        <div>
          <h2>Change By Design Second line example teste</h2>
          <span>Tim Brown, Julie Zhuo, Fried Maximiilian</span>

          <div className="info">
            <h3>Informações</h3>
            <ItemDetail title="Páginas" label="304 páginas" />
            <ItemDetail title="Editora" label="Editora Loyola" />
            <ItemDetail title="Publicação" label="2020" />
            <ItemDetail title="Idioma" label="Inglês" />
            <ItemDetail title="Título Original" label="Change By Design" />
            <ItemDetail title="ISBN-10" label="0062856626" />
            <ItemDetail title="ISBN-13" label="978-0062856623" />
          </div>

          <Summary>
            <h3>Resenha da Editora</h3>
            <p>
              <q>
                Hazel foi diagnosticada com câncer aos treze anos e agora, aos
                dezesseis, sobrevive graças a uma droga revolucionária que detém
                a metástase em seus pulmões. Ela sabe que sua doença é terminal
                e passa os dias vendo tevê e lendo Uma aflição imperial, livro
                cujo autor deixou muitas perguntas sem resposta.
              </q>
            </p>
          </Summary>
        </div>
      </Content>
    </Container>
  );
};

export default Modal;

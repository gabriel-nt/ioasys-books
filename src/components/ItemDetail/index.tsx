import { Container } from './styles';

interface ItemDetailPros {
  title: string;
  label: string;
}

export const ItemDetail = ({ title, label }: ItemDetailPros) => {
  return (
    <Container>
      <span>{title}</span>
      <span>{label}</span>
    </Container>
  );
};

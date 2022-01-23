import { Container } from './styles';

interface ItemDetailPros {
  title: string;
  label: string | number;
}

const ItemDetail = ({ title, label }: ItemDetailPros) => {
  return (
    <Container>
      <span>{title}</span>
      <span>{label}</span>
    </Container>
  );
};

export default ItemDetail;

import { Button } from '../Button';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

import { Container } from './styles';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePagination(page: number): void;
}

const Pagination = ({
  totalPages,
  currentPage,
  handlePagination,
}: PaginationProps) => {
  const handlePrevPage = () => {
    handlePagination(currentPage - 1);
  };

  const handleNextPage = () => {
    handlePagination(currentPage + 1);
  };

  return (
    <Container>
      <p>
        Página <b>{currentPage}</b> de <b>{Math.floor(totalPages)}</b>
      </p>
      <Button
        type="button"
        onClick={handlePrevPage}
        disabled={currentPage - 1 === 0}
      >
        <MdOutlineChevronLeft />
      </Button>
      <Button
        type="button"
        onClick={handleNextPage}
        disabled={currentPage + 1 > Math.floor(totalPages)}
      >
        <MdOutlineChevronRight />
      </Button>
    </Container>
  );
};

export default Pagination;

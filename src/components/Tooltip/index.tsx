import { Container } from './styles';

interface TooltipProps {
  label?: string;
  isVisible: boolean;
}

const Tooltip = ({ label, isVisible }: TooltipProps) => {
  return (
    <Container isVisible={isVisible} className={`${isVisible && 'fadeIn'}`}>
      {label ? <span>{label}</span> : <span>Ops...tente novamente!</span>}
    </Container>
  );
};

export default Tooltip;

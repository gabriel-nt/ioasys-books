import styled from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  left: 0;
  padding: 16px;
  bottom: -72px;
  margin-top: 24px;
  line-height: 16px;
  position: absolute;
  width: max-content;
  border-radius: 4px;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.4);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  span {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  &:before {
    width: 0;
    height: 0;
    top: -8px;
    left: 17px;
    content: '';
    position: absolute;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid rgba(255, 255, 255, 0.4);
  }
`;

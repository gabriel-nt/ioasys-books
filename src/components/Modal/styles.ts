import ReactModal from 'react-modal';
import styled from 'styled-components';

export const Container = styled(ReactModal)`
  width: 100%;
  padding: 48px;
  outline: none;
  max-width: 769px;
  overflow: auto;
  margin: 0 16px;
  border-radius: 4px;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  background: ${({ theme }) => theme.colors.white};

  button {
    top: 16px;
    right: 16px;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.pink45};
    border: 4px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 24px;
      margin-top: 64px;
      padding-bottom: 32px;
      height: calc(100% - 80px);
    }
  }
`;

export const ImageContainer = styled.div`
  min-width: 349px;
  min-height: 513px;
  margin-right: 48px;
  position: relative;
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    & {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;

    > h2,
    > span {
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }

    > h2 {
      font-size: 28px;
      font-weight: 500;
      line-height: 40px;
      -webkit-line-clamp: 2;
      color: ${({ theme }) => theme.colors.gray};
    }

    > span {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 32px;
      font-weight: normal;
      -webkit-line-clamp: 1;
      color: ${({ theme }) => theme.colors.pink45};
    }
  }

  h3 {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: var(--gray800);
    text-transform: uppercase;
  }

  .info {
    margin-bottom: 32px;

    h3 {
      margin-bottom: 7px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

export const Summary = styled.div`
  p {
    font-size: 12px;
    overflow: hidden;
    line-height: 20px;
    font-weight: normal;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.colors.gray};
  }

  q {
    &::before {
      top: 20px;
      font-size: 45px;
      quotes: '“' '”';
      margin-right: 6px;
      position: relative;
      font-family: -webkit-body;
      color: ${({ theme }) => theme.colors.gray};
    }

    &::after {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    & p {
      -webkit-line-clamp: initial;
    }
  }
`;

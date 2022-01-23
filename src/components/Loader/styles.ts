import styled from 'styled-components';

export const Container = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: inline-block;
  animation: 1s 0.2s spin infinite;
  border: 4px solid ${({ theme }) => theme.colors.dark};
  border-top-color: rgba(3, 3, 3, 0.1);

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

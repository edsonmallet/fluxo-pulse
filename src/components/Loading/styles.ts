import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary};
  font-size: 0.8rem;

  img {
    margin-right: 40px;
  }
`;

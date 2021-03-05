import theme from '@/styles/theme';
import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  max-width: 500px;
  margin: 0 0 10px 0;
  padding: ${theme.metrics.padding};
  border: 1px solid ${theme.colors.black20};
  background-color: ${theme.colors.black5};
  font-size: 1rem;
  border-radius: ${theme.metrics.borderRadius};
  color: ${theme.colors.black80};
  outline: none;

  option {
    font-size: 1.2rem;
    padding: 0 0 8px 0;
    display: flex;
    white-space: pre;
    min-height: 30px;
  }
`;

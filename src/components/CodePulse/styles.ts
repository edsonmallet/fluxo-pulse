import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px 0;
`;

export const Label = styled.label`
  margin-bottom: 16px;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Input = styled.input`
  background-color: ${theme.colors.silver};
  text-align: center;
  height: 60px;
  width: 60px;
  border-radius: 10px;
  margin: 0 4px;
  border: 1px solid ${theme.colors.black20};
  font-size: 38px;
  color: ${theme.colors.black50};
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

import theme from '@/styles/theme';
import styled from 'styled-components';
import { ValidationProps } from '.';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const Label = styled.label`
  margin-bottom: 16px;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  background-color: ${theme.colors.silver};
  text-align: center;
  height: 50px;
  width: 40px;
  border-radius: ${theme.metrics.borderRadius};
  margin: 0 2px;
  border: 1px solid ${theme.colors.black10};
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.black50};
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

export const Validations = styled.div<ValidationProps>`
  min-height: 50px;
  font-size: 0.7em;
  font-weight: 600;
  color: ${(props) =>
    props.type === 'invalid' ? theme.colors.error : theme.colors.primary};
`;

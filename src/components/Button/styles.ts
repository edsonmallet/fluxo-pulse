import styled from 'styled-components';
import { lighten, darken } from 'polished';
import theme from '@/styles/theme';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.outlined ? 'transparent' : props.backgroundColor};
  color: ${(props) =>
    props.outlined ? props.backgroundColor : theme.colors.white};
  padding: 16px 48px;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: ${theme.metrics.borderRadius};
  border: ${(props) =>
    props.outlined ? `2px solid ${props.backgroundColor}` : 'none'};
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  letter-spacing: 2px;
  font-size: 1rem;

  > svg {
    fill: ${(props) =>
      props.outlined ? props.backgroundColor : theme.colors.white};
    padding-right: 8px;
    margin: -5px 0;
    width: 18px;
    height: 18px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: ${theme.colors.boxShadow};
    border-color: transparent;
    background-color: ${(props) =>
      props.outlined
        ? props.backgroundColor
        : lighten(0.05, props.backgroundColor as string)};
    color: ${theme.colors.white};
  }

  &:active:not(:disabled) {
    box-shadow: ${theme.colors.boxShadow};
    background-color: ${(props) =>
      darken(0.05, props.backgroundColor as string)};
  }
`;

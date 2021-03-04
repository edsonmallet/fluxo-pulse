import React from 'react';
import theme from '@/styles/theme';
import { Container } from './styles';

export interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
  onClick?: (event: any) => void;
  disabled?: boolean;
  label?: string;
  icon?: React.ReactNode | React.Component;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  backgroundColor = theme.colors.primary,
  color = theme.colors.white,
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {icon && icon}
      {children}
    </Container>
  );
};

export { Button };

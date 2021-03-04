import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '@/styles/global';
import AppThemeProvider from '@/components/AppThemeProvider';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppThemeProvider>
  );
};

export default MyApp;

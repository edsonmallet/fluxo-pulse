import { LanguageProvider } from '@/contexts/Intl';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

const AppThemeProvider: React.FC = ({ children }) => {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </LanguageProvider>
    </>
  );
};

export default AppThemeProvider;

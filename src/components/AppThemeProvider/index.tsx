import { LanguageProvider } from '@/contexts/Intl';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import useSettings, { SettingsProvider } from '@/contexts/Settings';

const AppThemeProvider: React.FC = ({ children }) => {
  const { settings } = useSettings();

  return (
    <>
      <LanguageProvider>
        <SettingsProvider settings={settings}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </SettingsProvider>
      </LanguageProvider>
    </>
  );
};

export default AppThemeProvider;

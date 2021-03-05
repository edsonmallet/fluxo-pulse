import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ISettings {
  tokenPulse: string;
  responseDay: number;
  currentDay: Date;
}

interface SettingContextData {
  settings: ISettings;
  saveSettings(data: ISettings): void;
}

interface SettingProviderProps {
  settings: ISettings;
  children: ReactNode;
}

const defaultSettings: ISettings = {
  tokenPulse: '',
  responseDay: 0,
  currentDay: new Date(),
};

const SettingsContext = createContext<SettingContextData>({
  settings: defaultSettings,
  saveSettings: () => {},
} as SettingContextData);

export const SettingsProvider = ({
  settings,
  children,
}: SettingProviderProps) => {
  const [currentSettings, setCurrentSettings] = useState<ISettings | null>(
    settings || defaultSettings,
  );

  const storeSettings = (settings: ISettings): void => {
    window.localStorage.setItem('settings', JSON.stringify(settings));
  };

  const restoreSettings = (): ISettings => {
    let settings = null;

    try {
      const storedData = window.localStorage.getItem('settings');
      if (storedData) {
        settings = JSON.parse(storedData);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    return settings;
  };

  const saveSettings = (update: ISettings): void => {
    const mergedSettings = update;
    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();
    if (restoredSettings) setCurrentSettings(restoredSettings);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings as ISettings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => useContext(SettingsContext);

export default useSettings;

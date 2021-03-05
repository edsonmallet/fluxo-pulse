import useTranslation from '@/contexts/Intl';
import useSettings from '@/contexts/Settings';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../Button';
import { SelectField } from '../Form/Select';
import { Container, Privacy, FormWrapper } from './styles';

interface UserProps {
  gender: string;
  ageGroup: string;
  ageWork: string;
  department: string;
}

interface informerWrapperProps {
  code: string;
}

const InformerWrapper: React.FC<informerWrapperProps> = ({
  code,
}: informerWrapperProps) => {
  const { text } = useTranslation();
  const { settings, saveSettings } = useSettings();
  const router = useRouter();

  const [user, setUser] = useState<UserProps>({
    gender: '',
    ageGroup: '',
    ageWork: '',
    department: '',
  } as UserProps);

  const handleUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handlePulse = () => {
    saveSettings({
      tokenPulse: 'asyagsyasgyagsays',
      currentDay: new Date(),
      responseDay: 0,
    });
    router.push(`/${code.toLocaleLowerCase()}/questions`);
  };

  return (
    <Container>
      <div>
        <h2>{text('informerTitle')}</h2>
        <p>{text('informerDescription')}</p>
      </div>

      <FormWrapper>
        <SelectField
          name="gender"
          options={text('genders')}
          onChange={(event) => handleUser(event)}
        />
        <SelectField
          name="ageGroup"
          options={text('ageGroup')}
          onChange={(event) => handleUser(event)}
        />
        <SelectField
          name="ageWork"
          options={text('ageWork')}
          onChange={(event) => handleUser(event)}
        />
        <SelectField
          name="department"
          options={text('genders')}
          onChange={(event) => handleUser(event)}
        />

        <Button
          disabled={Object.values(user).some((item) => item.length === 0)}
          onClick={() => handlePulse()}
        >
          Próximo &rarr;
        </Button>
      </FormWrapper>

      <Privacy>
        <h4>{text('privacyPolitic')}</h4>
        <p>{text('privacyPoliticParagraph')}</p>
      </Privacy>
    </Container>
  );
};

export { InformerWrapper };

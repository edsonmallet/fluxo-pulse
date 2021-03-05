import useTranslation from '@/contexts/Intl';
import Image from 'next/image';
import { Container } from './styles';

const Loading: React.FC = () => {
  const { text } = useTranslation();
  return (
    <>
      <Container>
        <Image width={32} height={32} src="/loading.svg" />
        {text('loading')}
      </Container>
    </>
  );
};

export { Loading };

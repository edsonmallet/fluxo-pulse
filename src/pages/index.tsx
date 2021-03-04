import { Button } from '@/components/Button';
import { CodePulse } from '@/components/CodePulse';
import Layout from '@/components/Layout';
import useTranslation from '@/contexts/Intl';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

const Home: React.FC = () => {
  const { text } = useTranslation();
  const router = useRouter();

  const [codePulse, setCodePulse] = useState<string>('');

  const checkExistPulse = useCallback(
    (code) => {
      router.push(`/${code}`);
    },
    [codePulse],
  );

  return (
    <>
      <Layout companyLogoSrc="/logos/fluxo_logo.svg">
        <p>{text('titleIndex')}</p>
        <p>{text('subtitleIndex')}</p>
        <CodePulse
          length={6}
          onComplete={(code) => {
            setCodePulse(code);
            checkExistPulse(code);
          }}
          onChange={(code) => setCodePulse(code)}
        />
        <Button disabled={codePulse.length < 6}>{text('buttonIndex')}</Button>
      </Layout>
    </>
  );
};

export default Home;

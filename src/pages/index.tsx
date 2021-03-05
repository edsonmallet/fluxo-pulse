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
  const [codeValid, setCodeValid] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<boolean>(false);

  const checkExistPulse = useCallback(
    async (code) => {
      try {
        setVerifyCode(true);
        const res = await fetch(`api/v1/${code}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setCodePulse(json.code);
        setCodeValid(true);
        setVerifyCode(false);
      } catch (e) {
        setVerifyCode(false);
      }
    },
    [codePulse],
  );

  const handleCode = (code: string) => {
    setCodePulse(code);
    if (code.length < 5) setCodeValid(false);
  };

  const handleClickInitPulse = () => {
    router.push(`${codePulse}`);
  };

  return (
    <>
      <Layout companyLogoSrc="/logos/fluxo_logo.svg">
        <p>{text('titleIndex')}</p>
        <p>{text('subtitleIndex')}</p>

        <CodePulse
          length={5}
          loading={verifyCode}
          valid={codeValid}
          onComplete={(code) => {
            setCodePulse(code);
            checkExistPulse(code);
          }}
          onChange={(code) => handleCode(code)}
        />

        <Button disabled={!codeValid} onClick={() => handleClickInitPulse()}>
          {text('buttonIndex')}
        </Button>
      </Layout>
    </>
  );
};

export default Home;

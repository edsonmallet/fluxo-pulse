import { Button } from '@/components/Button';
import { CodePulse } from '@/components/CodePulse';
import Layout from '@/components/Layout';
import { useState } from 'react';

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <Layout companyLogoSrc="/logos/fluxo_logo.svg">
        <p>Digite o código de acesso da pesquisa para conseguir responder.</p>
        <p>Sua participação é muito importante para sua Empresa</p>
        <CodePulse
          length={6}
          loading={loading}
          onComplete={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 10000);
          }}
        />
        <Button>RESPONDER</Button>
      </Layout>
    </>
  );
};

export default Home;

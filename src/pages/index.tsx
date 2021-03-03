import { CodePulse } from '@/components/CodePulse';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Home: React.FC = () => {
  const [code, setCode] = useState<string>('');

  return (
    <>
      <Layout companyLogoSrc="/logos/fluxo_logo.svg">
        <p>Digite o código de acesso da pesquisa para conseguir responder.</p>
        <p>Sua participação é muito importante para sua Empresa</p>
        <CodePulse onChange={(event) => setCode(event.target.value)} />
      </Layout>
    </>
  );
};

export default Home;

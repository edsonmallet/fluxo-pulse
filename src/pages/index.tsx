import { CodePulse } from '@/components/CodePulse';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Layout companyLogoSrc="/logos/fluxo_logo.svg">
        <p>Digite o código de acesso da pesquisa para conseguir responder.</p>
        <p>Sua participação é muito importante para sua Empresa</p>
        <CodePulse />
      </Layout>
    </>
  );
};

export default Home;

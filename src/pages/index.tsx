import Layout from '@/components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Layout companyLogoSrc="/logos/fluxo_logo.svg">
        Você precisa de um codigo para acesso
      </Layout>
    </>
  );
};

export default Home;

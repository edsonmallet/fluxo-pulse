import { InformerWrapper } from '@/components/Informer';
import Layout from '@/components/Layout';
import { Loading } from '@/components/Loading';
import useTranslation from '@/contexts/Intl';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface HomeProps {
  code: string;
}

const Home: NextPage<HomeProps> = ({ code }: HomeProps) => {
  const router = useRouter();
  const { text } = useTranslation();
  const [companyLogo, setCompanyLogo] = useState<string>('');

  const getCompany = async () => {
    const response = await fetch(`api/v1/${code}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const company = await response.json();
    setCompanyLogo(company.logo);
  };

  useEffect(() => {
    try {
      getCompany();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: text('codeInvalid'),
        willClose: () => router.push('/'),
      });
    }
  }, []);

  return (
    <>
      <Layout companyLogoSrc={companyLogo}>
        {companyLogo ? <InformerWrapper code={code} /> : <Loading />}
      </Layout>
    </>
  );
};

Home.getInitialProps = async ({
  query,
}: NextPageContext): Promise<HomeProps> => {
  let { code } = query;
  code = code as string;
  return { code };
};

export default Home;

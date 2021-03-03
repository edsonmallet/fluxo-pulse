import Layout from '@/components/Layout';

import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Layout companyLogoSrc="https://res.cloudinary.com/hiveradm/image/upload/v1597238000/hiver-companies-logo/o6ln6vnakbrqc88kt5p5.png">
        {router.query.id}
      </Layout>
    </>
  );
};

export default Home;

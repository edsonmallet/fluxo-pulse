import Layout from '@/components/Layout';

import { useRouter } from 'next/router';
import { useState } from 'react';

const Home: React.FC = () => {
  const router = useRouter();
  const [informer, setInformer] = useState<boolean>(false);

  return (
    <>
      <Layout companyLogoSrc="https://res.cloudinary.com/hiveradm/image/upload/v1597238000/hiver-companies-logo/o6ln6vnakbrqc88kt5p5.png">
        questions
      </Layout>
    </>
  );
};

export default Home;

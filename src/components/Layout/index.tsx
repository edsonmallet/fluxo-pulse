import { memo, ReactNode } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Container, FooterWrapper, HeaderWrapper, MainWrapper } from './styles';

interface LayoutProps {
  children: ReactNode;
  companyLogoSrc: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  companyLogoSrc,
}: LayoutProps) => (
  <>
    <Head>
      <title>Fluxo Pulse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <HeaderWrapper>
        <Image width={100} height={50} src={companyLogoSrc} loading="eager" />
      </HeaderWrapper>

      <MainWrapper>{children}</MainWrapper>

      <FooterWrapper>
        Powered By
        <Image
          src="/logos/fluxo_icon.svg"
          width={24}
          height={24}
          loading="eager"
        />
      </FooterWrapper>
    </Container>
  </>
);

export default memo(Layout);

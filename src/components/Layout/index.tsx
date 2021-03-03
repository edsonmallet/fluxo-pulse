import { memo, ReactNode } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './Layout.module.css';

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
    <div className={styles.container}>
      <header className={styles.header}>
        <Image width={100} height={50} src={companyLogoSrc} loading="eager" />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Powered By
        <Image
          src="/logos/fluxo_icon.svg"
          width={24}
          height={24}
          loading="eager"
        />
      </footer>
    </div>
  </>
);

export default memo(Layout);

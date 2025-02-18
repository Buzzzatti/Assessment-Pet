import { ReactNode } from 'react';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Footer } from './Footer';

interface PageLayoutProps<T extends ReactNode> {
  title?: string;
  children?: T;
}

export const PageLayout = <T extends ReactNode>({ title, children }: PageLayoutProps<T>) => {
  return (
    <>
      <Header title={title} />
      <MainContent>{children}</MainContent>
      {/* <Footer /> */}
    </>
  );
};

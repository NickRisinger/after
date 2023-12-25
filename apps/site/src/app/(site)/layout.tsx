import { Header, Footer } from '~/components/layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <section>nav</section>
      {children}
      <Footer />
    </>
  );
}

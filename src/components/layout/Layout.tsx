import { Footer } from "../screen/auth/footer/Footer";
import { Header } from "./header/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

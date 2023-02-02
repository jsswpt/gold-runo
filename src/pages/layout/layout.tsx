import { Footer, Navigation } from "@/shared/ui";
import { Header } from "@/widgets";

interface Layout {
  children: React.ReactNode;
}

export const Layout = (props: Layout) => {
  return (
    <div>
      <Header />
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

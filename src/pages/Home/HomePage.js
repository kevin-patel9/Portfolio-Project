import { Footer } from "../../component/Footer/footer";
import { Details } from "../../component/infoPage/PortfolioDetail";
import { PortfolioNavbar } from "../../component/Navbar/navbar";

export const HomePage = () => {
  return (
    <>
      <PortfolioNavbar />
      <Details />
      <Footer />
    </>
  );
};

import { Footer } from "./component/footer";
import { MiddleArea } from "./component/infoPage/PortfolioDetail";
import { PortfolioNavbar } from "./component/navbar";

export const HomePage = () => {
  return (
    <>
      <PortfolioNavbar />
      <MiddleArea />
      <Footer />
    </>
  );
};

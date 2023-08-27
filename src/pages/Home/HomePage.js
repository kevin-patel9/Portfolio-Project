import Footer from "../../component/Footer/footer";
import Details from "../../component/infoPage/PortfolioDetail";
import Skills from "../../component/infoPage/skills";
import Navbar from "../../component/Navbar/navbar";
import Projects from "../../component/infoPage/projects";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Details />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

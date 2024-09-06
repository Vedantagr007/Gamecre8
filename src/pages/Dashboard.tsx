import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </>
  );
};

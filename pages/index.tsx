import AOS from "aos";
import type { NextPage } from "next";
import { useEffect } from "react";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import MainBanner from "../components/organisms/MainBanner";

// component
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;

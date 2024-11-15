import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;

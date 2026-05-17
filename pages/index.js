import Head from "next/head";
import About from "../components/About";
import Banner from "../components/Banner";
import Capabilities from "../components/Capabilities";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hire from "../components/Hire";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Faizan Rizwan | Senior Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Faizan Rizwan, a senior software engineer building AI agents, Web3 products, scalable backends, and high-performance web applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <Experience />
        <Portfolio />
        <Capabilities />
        <Testimonials />
        <Hire />
        <Footer />
      </div>
    </>
  );
}

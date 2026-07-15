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
        <title>Faizan Rizwan | Agentic AI Engineer</title>
        <meta
          name="description"
          content="Portfolio of Faizan Rizwan, a senior software engineer building agentic AI systems with LangChain, LangGraph, Vercel AI SDK, and FastAPI, alongside Web3 products and high-performance React and Next.js applications."
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

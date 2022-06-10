import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import GetStarted from './GetStarted';
import Footer from './Footer';

const Home = function () {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <GetStarted />
      <Footer />
    </section>
  );
};

export default Home;

import { AboutHome } from '../components/AboutHome';
import AvailBooks from '../components/AvailBooks';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <div className='bg-orange-50'>

      <Navbar />
        <Banner />
        <AboutHome/>
      <AvailBooks />
      <Footer />
      </div>
    </>
  );
}

export default Home;

import AvailBooks from './components/AvailBooks';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-orange-50 h-screen object-cover w-full">
      <Navbar />
      <Banner />
      <AvailBooks />
      <Footer />
    </div>
  );
}

export default App;

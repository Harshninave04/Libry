import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
function App() {
  return (
    <div className="bg-orange-50 h-screen object-cover w-full dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

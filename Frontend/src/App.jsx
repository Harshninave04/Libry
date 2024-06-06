import Home from './Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
import About from './components/About';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className="bg-orange-50 h-screen object-cover w-full dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

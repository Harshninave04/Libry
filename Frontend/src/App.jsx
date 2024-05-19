import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './Courses/Courses';
function App() {
  return (
    <div className="bg-orange-50 h-screen object-cover w-full">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;

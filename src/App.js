import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './pages/courses';
import CouresDetails from './pages/courseDetails';
import Dashboard from './pages/dashboard';
import { CourseContextProvider } from './context/courseContextProvider';

function App() {
  return (
    <CourseContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/course-details/:id" element={<CouresDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </CourseContextProvider>
  );
}

export default App;

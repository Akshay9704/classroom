import { useContext, useState } from 'react';
import CourseContext from '../context/courseContext.jsx';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Header from "../components/header.js"

const UserDashboard = () => {
  const [now, setNow] = useState(0);
  const { enrolledCourses } = useContext(CourseContext);

  const handleProgress = () => {
    if (now < 100) {
      setNow(now + 100);
    }
  };

  return (
    <div className="bottom">
      <Header />
      <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
        <h2 className=" text-2xl lg:text-3xl font-bold">Enrolled Courses</h2>
        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
          <div className="flex-1">
            <div className="p-8">
              <ul className="-my-7 divide-y divide-gray-200">
                {enrolledCourses.map((product) => (
                  <div>
                    <li
                      key={product.id}
                      className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                    >
                      <div className="flex flex-1 items-stretch">
                        <div className="flex-shrink-0">
                          <img
                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                            src={product.thumbnail}
                            alt=""
                          />
                        </div>
                        <div className="ml-5 flex flex-col justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-900">{product.name}</p>
                            <p className="mt-1.5 text-sm font-medium text-gray-500">{product.duration}</p>
                          </div>
                          <div className='mt-3'>
                            <p className='font-bold text-sm mb-1'>Completed: </p>
                            <ProgressBar variant="success" now={now} label={`${now}%`} />
                          </div>
                          <div>
                            <button onClick={handleProgress} className='mt-3 hover:font-bold'>Mark as completed</button>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto flex flex-col items-end justify-between">
                        <p className="text-right text-sm font-bold text-gray-900">{product.schedule}</p>
                      </div>
                    </li>
                    <div>
                      <button className='my-3 hover:font-bold'>Cancel the enrollment</button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
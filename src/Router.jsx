import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/student/:id",
    element: <Student />
  },
  {
    path: "/student/add",
    element: <AddStudent />
  }
]);
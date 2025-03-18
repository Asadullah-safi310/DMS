import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import { App } from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors';
import Login from '../pages/Login';
import MyProfile from '../pages/MyProfile';
import Myappointments from '../pages/Appointments';
import Appointments from '../pages/Appointments';


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,  
    children: [
      {
        path: '/',  //if children doesn't exist <Home/> will be go and replace with outlet
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/doctors',
        element: <Doctors/>,
      },
      {
        path: '/doctors/:speciality',
        element: <Doctors/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/my-Profile',
        element: <MyProfile/>,
      },
      {
        path: 'my-appointment',
        element: <Myappointments/>,
      },
      {
        path: '/appointment/:docID',
        element: <Appointments/>,
      },

    ]
  },
]);

export default AppRouter;
 

// ka da / na bad child path na oo no by default da outlet par zey <Home/> run kigi
// ao ka da / na bad about oo no da outlet par zey ba <about/> run kigi.  
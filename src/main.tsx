import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AppContextProvider from './context/AppContext.tsx';
import AppRouter from './Routes/index.tsx';


createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <RouterProvider router={AppRouter} />
  </AppContextProvider>
);

import { Outlet } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import Devbar from '@/components/Devbar/Devbar';
import NavBar from '@/components/Navbar';

const App = () => {
  const { token } = useAuth();

  // For testing purposes, we need to render the app without the Devbar
  if (window.Cypress) {
    return (
      <div>
        {token && <NavBar />}
        <Outlet />
      </div>
    );
  }

  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        <Devbar />
      </div>
      <div className='ml-[700px]'>
        {token && <NavBar />}
        <Outlet />
      </div>
    </>
  );
};

export default App;

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routers/Routers';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMe } from './Redux/Features/User/AuthSlice';
import { Toaster } from 'react-hot-toast';
import LoadingPage from './Components/LoadingPage/LoadingPage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <div className='App'>

      {loading ? <LoadingPage /> :
        <RouterProvider router={routers} />}


      <Toaster />
    </div>
  );
}

export default App;

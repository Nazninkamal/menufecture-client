import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routers/Routers';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe} from './Redux/Features/User/AuthSlice';
import { Toaster } from 'react-hot-toast';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe())

  }, [dispatch])


 


  return (
    <div className='App'>
        <RouterProvider router={routers} />
      <Toaster />
    </div>
  );
}

export default App;

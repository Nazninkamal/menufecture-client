import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routers/Routers';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from './Redux/Features/User/AuthSlice';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <div >
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;

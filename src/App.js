import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routers/Routers';

function App() {
  return (
    <div >
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;

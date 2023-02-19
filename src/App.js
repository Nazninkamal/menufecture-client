import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routers/Routers';

function App() {
  return (
    <div className="App">
       <RouterProvider router={routers} />
    </div>
  );
}

export default App;

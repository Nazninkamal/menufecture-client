import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/App/store';
import LoadingPage from './Components/LoadingPage/LoadingPage';
const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={<LoadingPage />}>
      <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

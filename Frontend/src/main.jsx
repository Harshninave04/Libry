import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <div className="bg-orange-50 dark:bg-black dark:text-white">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>,
);

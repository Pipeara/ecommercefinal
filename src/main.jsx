import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde "react-dom/client"
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/redux/store'; // Importa tu store de Redux

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

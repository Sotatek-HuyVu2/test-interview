import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { mainRoutes } from 'routes/routes';
import Menu from './components/menu';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        {mainRoutes.map((route, index) => {
          const Component = route.component;
          return <Route key={index} path={route.path} element={<Component />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;

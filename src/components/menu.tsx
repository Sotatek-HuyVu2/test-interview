import React from 'react';
import { NavLink } from 'react-router-dom';
const paths = [
  {
    to: '/test1',
    name: 'test 1',
  },
  {
    to: '/test2',
    name: 'test 2',
  },
];
const Menu = () => {
  return (
    <div className='menu'>
      {paths.map((path, index) => {
        return (
          <NavLink
            to={path.to}
            className={({ isActive }) => {
              return isActive ? 'menu-active' : 'no-active';
            }}
            key={index}
          >
            {path.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Menu;

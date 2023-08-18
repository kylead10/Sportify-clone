import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusic from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='spotify logo'
      />
      <SidebarOption title='Home' />
      <SidebarOption title='Search' />
      <SidebarOption title='Your Library' />
    </div>
  );
};

export default Sidebar;

import { useState } from 'react';
import { bottom } from '../../constants/header';
import MenuIcon from '@mui/icons-material/Menu';
import SideNav from './SideNav';

const Bottom = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li
          onClick={ () => setSideNav(true) }
          className='header-hover items-center gap-1'>
          <MenuIcon />All
        </li>
        {
          bottom.map((item) => (
            <li key={ item.id } className='header-hover'>{ item.title }</li>
          ))
        }
      </ul>
      { sideNav && <SideNav setSideNav={setSideNav} /> }
    </div>
  )
}

export default Bottom;

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { logo } from '../assets/index';

const Header = () => {
  return (
    <header className=''>
      <div className='w-full bg-amazon_blue text-white px-4 py-3 pl-6 flex items-center gap-4'>
        <div className='headerHover'>
          <img className='w-14' src={ logo } alt="logo" />
        </div>
        <div className='headerHover'>
          <PlaceOutlinedIcon />
          <p className='text-sm text-light_text font-light flex flex-col'>Deliver to
            <span className='text-sm text-white_text font-semibold -mt-1'> Home</span>
          </p>
        </div>
        <div className='h-10 rounded-md flex flex-grow relative'>
          <span>All <span></span><ArrowDropDownIcon /></span>
          <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text' />
        </div>
      </div>
    </header>
  )
}

export default Header;

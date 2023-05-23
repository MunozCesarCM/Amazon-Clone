import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Bottom from './Bottom';
import { categories } from '../../constants/header';
import { logo } from '../../assets/index';

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);

  return (
    <header className='sticky top-0 z-30'>
      <div className='w-full bg-amazon_blue text-white px-4 py-3 pl-6 flex items-center gap-4'>
        <div className='header-hover'>
          <Link to='/'>
            <img className='w-14' src={logo} alt="logo" />
          </Link>
        </div>
        <div className='header-hover items-center gap-1 mdl-hidden'>
          <PlaceOutlinedIcon />
          <p className='text-sm text-light_text font-light flex flex-col'>Deliver to
            <span className='text-sm text-white_text font-semibold -mt-1'> Home</span>
          </p>
        </div>
        <div className='h-10 rounded-md flex flex-grow relative lgl-hidden'>
          <span
            onClick={ () => setShowAll(!showAll) }
            className='search-container w-14 bg-gray-200 hover:bg-gray-300 border-2 duration-300 text-sm text-amazon_blue font-title_font rounded-tl-md rounded-bl-md'>
              All <span></span><ArrowDropDownIcon />
          </span>
          { showAll && (
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-2'>
                {categories.map((item) => (
                  <li key={item.id} className='text-sm tracking-wide font-title_font border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>
                    { item.title }
                  </li>
                ))}
                </ul>
              </div>
            )
          }
          <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text' />
          <span className='search-container w-12 bg-amazon_yellow hover:bg-[#F3A847] text-amazon_blue rounded-tr-md rounded-br-md'>
            <SearchIcon />
          </span>
        </div>
        <div className='flex flex-col items-start justify-center header-hover'>
          <p className='text-sm mdl:text-xs text-white mdl:text-light_text font-light'>Hello, sign in</p>
          <p className='text-sm font-semibold -mt-1 text-white_text mdl-hidden'>
            Accounts & Lists <span><ArrowDropDownIcon /></span>
          </p>
        </div>
        <div className='flex flex-col items-start justify-center header-hover lgl-hidden'>
          <p className='text-xs text-light_text font-light'>Returns</p>
          <p className='text-sm font-semibold -mt-1 text-white_text'>
            & Orders
          </p>
        </div>
        <Link to='/cart'>
          <div className='flex items-start justify-center relative header-hover'>
              <ShoppingCartOutlinedIcon />
              <p className='text-xs font-semibold mt-3 text-white'>
                Cart
                <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#F3A847] text-amazon_blue rounded-full flex justify-center items-center'>
                  {products.length}
                </span>
              </p>
          </div>
        </Link>
      </div>
      <Bottom />
    </header>
  )
}

export default Header;

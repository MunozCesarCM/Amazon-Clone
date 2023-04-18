import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from '../constants/sidenav';

const SideNav = ({ setSideNav }) => {
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (event.target.contains(ref.current)) {
        setSideNav(false);
      }
    })
  },[]);

  return (
    <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-80'>
      <div className='w-full h-full relative'>
        <motion.div
          ref={ref}
          initial={{x:-500, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:.3}}
          className='w-[350px] h-full bg-white'>
          <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
            <AccountCircleIcon />
            <h3 className='font-title_font font-bold text-lg tracking-wide'>
              Hello, sign in
            </h3>
          </div>
          {
            navItems.map((item) => (
              <div key={ item.id } className='py-3 border-t-[1px] border-b-gray-300'>
                <h3 className='text-lg font-title_font font-semibold mb-1 px-6'>
                  { item.title }
                </h3>
                <ul>
                  {
                    item.children.map((child) => (
                      <li key={ child.id } className='flex text-sm items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                        { child.title }<span><KeyboardArrowRightIcon /></span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <span className='cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-white flex items-center justify-center hover:text-zinc-200 duration-300'>
            <CloseIcon onClick={ () => setSideNav(false) } />
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default SideNav;

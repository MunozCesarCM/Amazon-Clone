import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { logo_dark_text } from '../assets';

const Registration = () => {
  return (
    <main className='w-full'>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[370px] mx-auto flex flex-col items-center'>
          <Link to='/'>
            <img className='w-32 my-8' src={logo_dark_text} alt='dark logo' />
          </Link>
          <div className='w-full border border-zinc-200 p-6'>
            <h2 className='font-title_font text-3xl font-medium mb-4'>
              Create Account
            </h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your Name</p>
                <input
                  type='text'
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border[#E77600] focus-within:shadow-amazon_input duration-100'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or phone number</p>
                <input
                  type='email'
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border[#E77600] focus-within:shadow-amazon_input duration-100'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Password</p>
                <input
                  type='password'
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border[#E77600] focus-within:shadow-amazon_input duration-100'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Re-enter Password</p>
                <input
                  type='password'
                  className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border[#E77600] focus-within:shadow-amazon_input duration-100'
                />
                <p className='text-xs text-gray-600'>Passwords must be at least 6 characters.</p>
              </div>
              <Link to='/'>
                <button className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#F7DFA5] to-[#F0C14B] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazon_input'>
                  Continue
                </button>
              </Link>
            </div>
            <p className='text-xs text-black leading-4 mt-4'>
              By creating an account, you agree to Amazon's
              <span className='text-blue-600'> Conditions of Use </span>and
              <span className='text-blue-600'> Privacy Notice.</span>
            </p>
            <p className='text-xs text-black leading-4 mt-2'>
              Already have an account?{' '}
              <Link to='/signin'>
                <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                  Sign in
                  <span>
                    <ArrowRightIcon />
                  </span>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
        <div className='flex items-center gap-6'>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of Use</p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Help</p>
        </div>
        <p className='text-xs text-gray-600'>© 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</p>
      </div>
    </main>
  );
}

export default Registration;

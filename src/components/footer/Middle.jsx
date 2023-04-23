import { footerPrimary } from '../../constants/footer';
import { logo } from '../../assets';

const Middle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:place-items-center md:items-start gap-6'>
            {footerPrimary.map((item) => (
              <div key={item.id} className='w-full mx-2'>
                  <h3 className='font-title_font text-white text-base font-semibold mb-3'>
                    {item.title}
                  </h3>
                  <ul className='flex flex-col gap-2 font-body_font'>
                    {item.children.map((child) => (
                      <li
                        key={child.id}
                        className='text-xs font-title_font tracking-wide hover:text-gray-100 cursor-pointer hover:underline duration-150'
                      >
                        {child.title}
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex gap-6 items-center justify-center py-6'>
        <div>
          <img className='w-20 pt-3' src={logo} alt='logo' />
        </div>
        <div className='flex gap-2'>
          <p className='footer-hover'>
            English
          </p>
        </div>
        <div className='footer-hover'>
          <img className='w-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/800px-Flag_of_the_United_States_%28Pantone%29.svg.png' alt='flag image' />
          <p>
            USA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Middle;

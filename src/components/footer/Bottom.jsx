import { footerSecondary } from '../../constants/footer';

const Bottom = () => {
  return (
    <div className='w-full bg-footer_bottom py-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-6 gap-2 place-content-center text-gray-400'>
          {footerSecondary.map((item) => (
            <div key={item.id} className='group cursor-pointer'>
              <h3 className='footer-item font-semibold text-[#DDDDDD] mb-[2px]'>
                {item.title}
              </h3>
              <p className='footer-item tracking-tight text-[#999999]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='text-[#DDDDDD] flex items-center justify-center mt-8 gap-4'>
        <span className='cursor-pointer text-xs hover:underline'>Conditions of Use</span>
        <span className='cursor-pointer text-xs hover:underline'>Privacy Notice</span>
        <span className='cursor-pointer text-xs hover:underline'>Your Ads Privacy Choices</span>
      </div>
      <div className='text-[#DDDDDD] flex items-center justify-center mt-1 gap-4 text-xs'>
        © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default Bottom;

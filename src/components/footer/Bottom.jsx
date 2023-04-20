import { footerSecondary } from '../../constants/footer';

const Bottom = () => {
  return (
    <div className='w-full bg-footer_bottom py-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-6 gap-2 place-content-center text-gray-400'>
          {footerSecondary.map((item) => (
            <div key={item.id} className='group'>
              <h3 className='w-24 font-semibold text-[12px] group-hover:underline text-[#DDDDDD] leading-3 mb-[2px]'>
                {item.title}
              </h3>
              <p className='w-24 tracking-tight text-[12px] text-[#999999] group-hover:underline leading-3'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bottom;

import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { uppercaseWords, formatMoney } from '../utils/string';

const Cart = () => {
  const products = useSelector((state) => state.reducer.products);

  return (
    <main className='font-body_font bg-gray-100'>
      <Header />
      <div className='w-full p-4'>
        <div className='container mx-auto grid grid-cols-5 gap-8'>
          <div className='w-full h-full bg-white px-4 col-span-4'>
            <div className='font-title_font flex items-end justify-between border-b-[1px] border-b-gray-400 py-3'>
              <h2 className='text-3xl'>Shopping Cart</h2>
              <h4 className='text-sm font-medium text-gray-500'>Price</h4>
            </div>
            <div>
              {products.map((item) => (
                <div key={`cart_${item.title}`} className='w-full border-b-[1px] border-b-gray-300 p-4 flex items-start gap-6'>
                  <div className='w-1/5'>
                    <img className='w-full h-44 object-contain' src={item.image} alt='Product image' />
                  </div>
                  <div className='w-4/5 flex flex-row justify-between'>
                    <div className='flex flex-col gap-2'>
                      <h2 className='text-lg'>{item.title}</h2>
                      <p className='font-semibold pr-10 text-sm'>{uppercaseWords(item.category)}</p>
                      <p className='pr-10 text-xs'>{item.description}</p>
                      <div className='bg-gray-100 flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow rounded-md'>
                        <p>Qty:</p>
                        <p>-</p>
                        <p>{item.quantity}</p>
                        <p>+</p>
                      </div>
                    </div>
                    <span className='font-semibold'>{formatMoney(item.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-full bg-white col-span-1'></div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cart;

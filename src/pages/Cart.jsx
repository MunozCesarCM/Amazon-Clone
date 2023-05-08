import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Cart = () => {
  const products = useSelector((state) => state.reducer.products);
  console.log(products);

  return (
    <main className='font-body_font bg-gray-100'>
      <Header />
      <div className='w-full p-4'>
        <div className='container mx-auto h-96 grid grid-cols-5 gap-8'>
          <div className='w-full h-full bg-white px-4 col-span-4'>
            <div className='font-title_font flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
              <h2 className='text-3xl font-medium'>Shopping Cart</h2>
              <h4 className='text-xl'>Subtitle</h4>
            </div>
            <div>
              {products.map((item) => (
                <div key={`cart_${item.title}`} className='w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6'>
                  <div className='w-1/5'>
                    <img className='w-full h-44 object-contain' src={item.image} alt='Product image' />
                  </div>
                  <div>
                    <h2 className='font-semibold text-lg'>{item.title}</h2>
                    <p className='pr-10 text-sm'>{item.description}</p>
                    <p className='text-base'>
                      Unit Price <span className='font-semibold'>${item.price}</span>
                    </p>
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

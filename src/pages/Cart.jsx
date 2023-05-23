import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { uppercaseWords, formatMoney } from '../utils/string';
import { deleteItem, incrementQuantity, decrementQuantity } from '../redux/slice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.products);
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total);
    });
  }, [products]);

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
                      <p className='text-[#007185] pr-10 text-xs'>Available</p>
                      <p className='pr-10 text-xs'>{item.description}</p>
                      <div className='bg-gray-100 flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow rounded-md'>
                        <p>Qty:</p>
                        <p
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>-</p>
                        <p>{item.quantity}</p>
                        <p
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>+</p>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className='flex justify-center bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>
                        Delete Item
                      </button>
                    </div>
                    <span className='font-semibold'>{formatMoney(item.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4'>
            <div>
              <p className='flex gap-2 items-start text-sm'>
                <span>
                  <CheckCircleIcon className='bg-white text-green-500 rounded-full' />
                </span>
                Your order qualifies for FREE shipping. Choose this option at checkout. See details . . . .
              </p>
            </div>
            <p className='font-semibold px-10 py-1 flex items-center justify-between'>
              Total:<span className='text-lg font-bold ml-2'>{formatMoney(totalPrice)}</span>
            </p>
            <label className='text-xs flex'><input type='checkbox' className='mr-1' />This order contains a gift</label>
          <button className='w-full font-title_font font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>
            Proceed to Pay
          </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cart;

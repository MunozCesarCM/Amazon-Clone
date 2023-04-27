import { useDispatch } from 'react-redux';
import { useProducts } from '../../hooks/useProducts';
import { addToCart } from '../../redux/slice';
import StarIcon from '@mui/icons-material/Star';

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useProducts();

  if (isLoading) return null;

  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4'>
      {products.map((item) => (
        <div key={item.id} className='bg-white h-auto py-8 duration-200 relative flex flex-col gap-4 px-4 relative shadow'>
          <div className='w-full h-auto flex items-center justify-center'>
            <img
              className='w-52 h-64 object-contain'
              src={item.image}
              alt='Product Image' />
            <span className='text-xs capitalize italic absolute top-3 right-4 text-gray-500'>
              {item.category}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <h2 className='font-title_font tracking-wide text-lg text-amazon_blue font-medium'>
              {item.title.substring(0,20)}
            </h2>
            <p className='text-sm text-gray-600 font-semibold'>
              ${item.price}
            </p>
          </div>
          <div>
            <p>
              {item.description.substring(0,90)} . . .
            </p>
            <div className='text-amazon_yellow text-sm flex items-center'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span className='baseline text-[#007185] ml-1 mt-[3px] hover:text-orange-700 duration-100 cursor-pointer'>
                {item.rating.count}
              </span>
            </div>
          </div>
          <button onClick={() => dispatch(addToCart({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            category: item.category,
            image: item.image,
            quantity: 1,
          }))} className='w-full font-title_font font-medium text-base bg-amazon_yellow hover:bg-yellow-400 hover:shadow duration-200 py-1.5 rounded-md mt-3'>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products;

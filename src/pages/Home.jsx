import Header from '../components/header/Header';
import Banner from '../components/home/Banner';
import Products from '../components/home/Products';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <main className='font-body_font bg-[#E3E6E6]'>
      <Header />
      <Banner />
      <div className='w-full -mt-20 md:-mt-32 xl:-mt-72 mb-10 py-10'>
        <Products />
      </div>
      <Footer />
    </main>
  )
}

export default Home;


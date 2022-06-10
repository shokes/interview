import bitcoin from '../src/images/bitcoin.png';
import eth from '../src/images/eth.png';

const GetStarted = function () {
  return (
    <section className='container relative'>
      <div className='bg-red-700 w-full pl-12 py-20 rounded-xl mb-28 '>
        <h3 className='font-semibold text-xl mb-5 w-[15rem]'>
          Join a new generation of investors
        </h3>
        <button className='bg-white uppercase text-black px-9 rounded-lg py-2 hover:bg-[#0f0f0f] font-semibold hover:text-white ease-in duration-300'>
          get started
        </button>
      </div>
      <img
        src={bitcoin}
        alt='bictoin'
        className='hidden lg:block absolute bottom-14 right-0 w-[15rem] h-[10rem]'
      />
    </section>
  );
};

export default GetStarted;

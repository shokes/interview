import heroBtc from '../src/images/btc.png';
import { Slide, Rotate, Fade } from 'react-awesome-reveal';
import { SiCoinbase, SiBinance, SiBitcoin } from 'react-icons/si';

const company = [
  {
    id: 1,
    name: 'binance',
  },

  {
    id: 2,
    name: 'coinbase',
  },

  {
    id: 3,
    name: 'bitcoin',
  },

  {
    id: 4,
    name: 'tether',
  },
];

const Hero = function () {
  return (
    <section className='container overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row items-center justify-between py-7'>
        <Fade duration={3000} triggerOnce>
          <div>
            <p className='  text-red-700 text-[3rem] capitalize font-semibold mb-2'>
              say hello to Sellcoins!
            </p>
            <h3 className='text-white text-4xl mb-2'>
              The new way to trade P2P
            </h3>
            <p className='text-sm mb-3'>
              With Sellcoins AIRTIME you can trade RMB, NGN and USD
            </p>
            <button className='bg-red-700 uppercase px-9 rounded-lg py-2 hover:bg-[#0f0f0f] ease-in duration-300'>
              get started
            </button>
          </div>
        </Fade>
        <Rotate triggerOnce>
          <div>
            <img src={heroBtc} alt='btc' />
          </div>
        </Rotate>
      </div>
      <div className='grid grid-cols-2 gap-y-3 items-center text-center mx-auto lg:flex justify-between capitalize text-xl mt-4 mb-20'>
        {company.map((item) => {
          return (
            <div
              key={item.id}
              className='flex items-center gap-x-1 gap-y-3 lg:gap-y-0 justify-self-center'
            >
              <SiBinance />
              {item.name}
            </div>
          );
        })}
      </div>

      <div className='grid grid-cols-1 gap-y-7 lg:gap-y-0 lg:grid-cols-3 border border-[#ced4da] py-14  rounded-xl overflow-hidden mb-14'>
        <Slide direction='up'>
          <div className='text-center'>
            <span className='text-5xl'>990k</span>
            <p>people have joined</p>
          </div>
        </Slide>
        <Slide direction='up'>
          <div className='text-center'>
            <span className='text-5xl'>50k</span>
            <p>VVIP users have joined</p>
          </div>
        </Slide>

        <Slide direction='up'>
          <div className='text-center'>
            <span className='text-5xl'>100+</span>
            <p>Big companies have joined</p>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Hero;

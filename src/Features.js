import phone from '../src/images/phone.png';
import { Slide, Zoom } from 'react-awesome-reveal';
const steps = [
  {
    id: 1,
    number: '01',
    heading: 'Click on buy SellCoins airtime',
    content: 'Select buy SellCoins aritime and proceed to the next step.',
  },

  {
    id: 2,
    number: '02',
    heading: 'Pay the seller',
    content: 'Pay with Fiat.',
  },
  {
    id: 3,
    number: '03',
    heading: 'Get SellCoins Airtime',
    content:
      'With SellCoins airtime you can make payment to Asia and pay Utility Bills.',
  },
];

const Features = function () {
  return (
    <section className='container'>
      <div className='flex flex-col-reverse lg:flex-row items-center pt-10 mb-20'>
        <div className='lg:w-[30rem]'>
          <h3 className='text-4xl font-semibold mb-4'>
            Sellcoins airtime makes online payments seamless in three steps
          </h3>
          {steps.map((item) => {
            return (
              <Slide direction='up' triggerOnce>
                <div className='flex gap-x-3 mb-2 '>
                  <div>
                    <span>{item.number}.</span>
                  </div>
                  <div>
                    <h2 className='font-semibold text-lg'> {item.heading} </h2>
                    <p className='text-sm'>{item.content}</p>
                  </div>
                </div>
              </Slide>
            );
          })}
        </div>
        <div className='flex'>
          <Zoom className='h-[30rem] w-[30rem] hidden lg:block'>
            <img
              src='https://papwallet.com/_nuxt/img/step-2.559a581.png'
              alt='phone'
            />
          </Zoom>

          <Zoom delay={300}>
            <img
              src='	https://papwallet.com/_nuxt/img/steps-1.82f9527.png'
              alt='phone'
              className='h-[20rem] w-[20rem] hidden lg:block'
            />
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Features;

import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Slide, Zoom } from 'react-awesome-reveal';

const Footer = function () {
  return (
    <section className='container pb-7'>
      <div className='lg:flex justify-between items-center'>
        <h3 className='text-2xl font-semibold mb-2'>
          Sellcoins is the new way.
        </h3>
        <ul className='grid grid-cols-1 gap-y-1 lg:flex gap-x-4'>
          <li>Faqs</li>
          <li>Fees</li>
          <li>Security</li>
          <li>Get in touch</li>
          <li>About us</li>
        </ul>
      </div>
      <Slide triggerOnce>
        <div className='border border-b-2 w-full border-[#ced4da] mt-3 mb-3 lg:mt-10 lg:mb-5'></div>
      </Slide>

      <div className='lg:flex justify-between items-center text-sm'>
        <ul className='grid grid-cols-1 gap-y-1 lg:flex lg:gap-x-3 items-center mb-3 lg:mb-0'>
          <li>Privacy Policy</li>

          <li>Cookies Policy</li>
          <li>Terms and Condition</li>
        </ul>
        <div className='flex items-center   lg:gap-x-3'>
          <span>&copy; Sellcoins 2022</span>
          <ul className='grid grid-cols-3 ml-3 lg:ml-0 items-center gap-x-2'>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

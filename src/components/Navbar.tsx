import { useEffect, useRef, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLImageElement | null>(null);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      // if click is inside menu -> ignore
      if (menuRef.current && menuRef.current.contains(target)) return;
      // if click is on the hamburger button -> ignore
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      // otherwise close
      setShowMobileMenu(false);
    };
    if (showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMobileMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <a href='#Header' className='flex items-center gap-2'>
          <img src={assets.logo2} alt='Deal Service Logistics' className='h-24 w-auto' />
        </a>
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 text-white flex-row'>
          <a href='#Header' className='cursor-pointer hover:text-gray-400'>
            <li>Home</li>
          </a>
          <a href='#About' className='cursor-pointer hover:text-gray-400'>
            <li>About</li>
          </a>
          <a href='#Services' className='cursor-pointer hover:text-gray-400'>
            <li>Services</li>
          </a>
          <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>
            <li>Testimonials</li>
          </a>
          <a href='#Contact' className='cursor-pointer hover:text-gray-400'>
            <li>Contact</li>
          </a>
        </ul>
        {/* Right side buttons */}
        <div className='flex gap-2 items-center'>
          <a
            href='#Contact'
            className='hidden text-lg md:block text-blue-400 font-semibold hover:underline'>
            Get a Quote
          </a>

          {/* ✅ Mobile Get a Quote next to hamburger */}
          <a href='#Contact' className='md:hidden text-blue-400 font-medium hover:underline'>
            Get a Quote
          </a>

          {/* Hamburger Menu */}
          <img
            ref={buttonRef}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            src={assets.menu_icon}
            alt='Menu'
            className='md:hidden w-7 cursor-pointer'
          />
        </div>
      </div>

      {/* ✅ Mobile Dropdown with slide animation */}
      <div
        ref={menuRef}
        style={{
          maxHeight: showMobileMenu ? menuRef.current?.scrollHeight : 0,
          opacity: showMobileMenu ? 1 : 0,
        }}
        className='md:hidden bg-gray-900 text-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out'>
        <ul className='flex flex-col items-start gap-4 p-6 text-lg font-medium'>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='#Header'
            className='hover:text-gray-400 transition'>
            <li>Home</li>
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='#About'
            className='hover:text-gray-400 transition'>
            <li>About</li>
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='#Services'
            className='hover:text-gray-400 transition'>
            <li>Services</li>
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='#Testimonials'
            className='hover:text-gray-400 transition'>
            <li>Testimonials</li>
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='#Contact'
            className='hover:text-gray-400 transition'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

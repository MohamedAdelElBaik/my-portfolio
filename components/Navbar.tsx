'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';

type NavbarProps = {
  activeDark: boolean;
  setActiveDark: React.Dispatch<React.SetStateAction<boolean>>;
};
type NavIconToggleProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ activeDark, setActiveDark }: NavbarProps) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openNav, setOpenNav] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <>
      {show && (
        <nav className="bg-light-background dark:bg-dark-background fixed z-50 shadow-md shadow-dark-primary-3l top-0 flex justify-between items-center py-5 px-10 w-full">
          <h1 className="text-2xl font-bold text-light-primary-r dark:text-dark-primary-r">
            Mohamed Adel
          </h1>

          <div>
            <NavIconToggle openNav={openNav} setOpenNav={setOpenNav} />

            <div
              className={`${style.navContent} ${
                openNav ? 'flex' : 'hidden'
              }  bg-light-backgroundL dark:bg-dark-backgroundL md:bg-inherit md:dark:bg-inherit`}
              onClick={() => setOpenNav(false)}
            >
              <ul className="flex flex-col md:static md:flex-row gap-5 font-semibold">
                <li className="cursor-pointer hover:text-light-secondary-l hover:dark:text-dark-secondary-l">
                  <a href="#home">Home</a>
                </li>
                <li className="cursor-pointer hover:text-light-secondary-l hover:dark:text-dark-secondary-l">
                  <a href="#about">About</a>
                </li>
                <li className="cursor-pointer hover:text-light-secondary-l hover:dark:text-dark-secondary-l">
                  <a href="#projects">Projects</a>
                </li>
                <li className="cursor-pointer hover:text-light-secondary-l hover:dark:text-dark-secondary-l">
                  <a href="#skills">Skills</a>
                </li>
              </ul>
              <div className="flex justify-between gap-8">
                <Link href="https://flowcv.com/resume/edghb969pu">
                  <button className="py-1 px-2 border border-spacing-1 border-light-primary-r dark:border-dark-primary-r  text-light-primary-r dark:text-dark-primary-r hover:bg-light-primary-3l hover:dark:bg-dark-primary-3l rounded-md">
                    Resume
                  </button>
                </Link>
                <button
                  className="bg-dark-primary-3l p-1 rounded-md"
                  onClick={() => setActiveDark((value) => !value)}
                >
                  <Image
                    className={style.imgSvg}
                    alt="dark mode toggle"
                    src={activeDark ? './dark.svg' : './light.svg'}
                    width="30"
                    height="30"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

function NavIconToggle({ openNav, setOpenNav }: NavIconToggleProps) {
  return (
    <>
      {
        <button
          onClick={() => setOpenNav((val) => !val)}
          className="md:hidden flex flex-col w-7 h-5 gap-1 justify-between items-center transition relative cursor-pointer"
        >
          {openNav ? (
            <>
              <span className="bg-dark-primary-r w-full h-1 rounded-sm -rotate-45 absolute top-1/2 duration-100"></span>
              <span className="bg-dark-primary-r w-full h-1 rounded-sm rotate-45 absolute top-1/2 duration-100"></span>
            </>
          ) : (
            <>
              <span className="bg-dark-primary-r w-full h-1 rounded-sm duration-100"></span>
              <span className="bg-dark-primary-r w-full h-1 rounded-sm duration-100"></span>
              <span className="bg-dark-primary-r w-full h-1 rounded-sm duration-100"></span>
            </>
          )}
        </button>
      }
    </>
  );
}

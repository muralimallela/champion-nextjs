'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between flex-wrap py-4">
          <Link href="/">
            <Image src="/images/logo2.png" height={60} width={200} alt="Logo" />
          </Link>

          <button
            className="text-gray-500 block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 6h-24v-2h24v2zm0 5h-24v-2h24v2zm0 5h-24v-2h24v2zm0 5h-24v-2h24v2z"/>
            </svg>
          </button>

          <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
            <ul className="text-sm lg:flex-grow">
              <li className="nav-item">
                <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">Services</Link>
              </li>
              <li className="nav-item">
                <Link href="/why" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">Why Us</Link>
              </li>
              <li className="nav-item">
                <Link href="/team" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">Team</Link>
              </li>
              <li className="nav-item">
                <Link href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4">
                  <i className="fa fa-user" aria-hidden="true"></i> Login
                </Link>
              </li>
            </ul>
            <form className="form-inline mt-4 lg:mt-0">
              <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

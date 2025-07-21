// import React from 'react'
// import ptLogo from '../public/pt-logo.svg'

// function Navbar() {
//   return (
//     <>
//         <nav className="absolute top-[4rem] w-full flex justify-between items-center px-20 z-50">
//         <img
//           src={ptLogo}
//           alt="Restaurant logo"
//           className="h-20 w-auto px-20 hover:scale-105 transition-transform duration-500"
//         />
        
//         <ul className="flex gap-10 text-white text-[1.1rem] font-medium items-center">
//           {['Home', 'Menu', 'Pages', 'Blog', 'Shop'].map((item) => (
//             <li key={item} className="group relative">
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="transition-colors duration-200 py-2 px-1"
//               >
//                 {item}
//               </a>
//               <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           ))}
//           <li>
//             <button className="border-2 border-white px-8 py-2 text-[0.9rem] font-[350] rounded-lg hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-200">
//               FIND A TABLE
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </>
//   )
// }

// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';
{/**import ptLogo from '../assets/pt-logo.svg'; */}

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Pages', path: '/our-story' },
    { name: 'Blog', path: '/blog' },
    { name: 'Shop', path: '/shop' }
  ];

  return (
    <nav className="absolute top-[4rem] w-full flex justify-between items-center px-20 z-50">
    {/**  <Link to="/">
        <img
          src={ptLogo}
          alt="Restaurant logo"
          className="h-20 w-auto px-20 hover:scale-105 transition-transform duration-500"
        />
      </Link>
       */}
      <ul className="flex gap-10 text-white text-[1.1rem] font-medium items-center">
        {navItems.map((item) => (
          <li key={item.name} className="group relative">
            <Link
              to={item.path}
              className="transition-colors duration-200 py-2 px-1"
            >
              {item.name}
            </Link>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
        <li>
          <Link 
            to="/reservation" 
            className="border-2 border-white px-8 py-2 text-[0.9rem] font-[350] rounded-lg hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-200"
          >
            FIND A TABLE
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Navbar from '../Components/Navbar'; 
import Reservation from '../Components/Reservation';
import Footer from '../Components/Footer';

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('STARTERS');

  const menuData = {
    STARTERS: [
      { name: 'Purple Corn Tostada', price: '$36', description: 'Ricotta, goat cheese, beetroot and datterini.' },
      { name: 'Bruno\'s Scribble', price: '$30', description: 'Culatello, Spalla Cotta, Mortadella, Culacciona.' },
      { name: 'Fresh Oysters Dozen', price: '$59', description: 'Our selection of fresh oysters, limes.' },
      { name: 'Bread with Smoked Wagyu Butter', price: '$13', description: 'Sonoma Signature Miche sourdough, lava salt.' },
      { name: 'Sourdough Bread', price: '$8', description: 'Sonoma Signature Miche sourdough, lava salt.' },
      { name: 'Smoked Wagyu Butter', price: '$13', description: 'Sonoma Signature Miche sourdough, lava salt.' },
      { name: 'Sourdough Bread', price: '$8', description: 'Sonoma Signature Miche sourdough, lava salt.' },
      { name: 'Smoked Wagyu Butter', price: '$13', description: 'Sonoma Signature Miche sourdough, lava salt.' },
    ],
    'MAIN COURSES': [
      { name: 'Caprese Con Mozzarella Di Bufala', price: '$12', description: 'Caprese salad with tomatoes and buffalo mozzarella.' },
      { name: 'Salt & Pepper Calamari', price: '$18', description: 'Squid, lime, soy mayo.' },
      { name: 'Wild Mushroom Arancini', price: '$18', description: 'Porcini purée, parmesan, basil.' },
      { name: 'Coffee Cured & Smoked Duck Breast', price: '$25', description: 'Duck breasts, Carrot purée, silver beet.' },
    ],
    SIDES: [
      { name: 'Side Dish 1', price: '$8', description: 'Description for Side Dish 1.' },
      { name: 'Side Dish 2', price: '$10', description: 'Description for Side Dish 2.' },
      { name: 'Side Dish 3', price: '$12', description: 'Description for Side Dish 3.' },
      { name: 'Side Dish 4', price: '$14', description: 'Description for Side Dish 4.' },
    ],
    DESSERTS: [
      { name: 'Dessert 1', price: '$7', description: 'Description for Dessert 1.' },
      { name: 'Dessert 2', price: '$9', description: 'Description for Dessert 2.' },
      { name: 'Dessert 3', price: '$11', description: 'Description for Dessert 3.' },
      { name: 'Dessert 4', price: '$13', description: 'Description for Dessert 4.' },
    ],
  };

  return (
    <>
      {/* Parallax IMG */}
      <div className='relative bg-black'>
            <Parallax
                bgImage="https://media.istockphoto.com/id/1411971240/photo/wine-and-champain-glass-in-luxury-weddings-and-events.jpg?s=1024x1024&w=is&k=20&c=QteiNoNyCBAyt6Wix_cPSEAF29naM-2Xl_K83LM-ic4="
                bgImageAlt="Reservation Table"
                strength={200}
                className="h-[65vh] opacity-60">
            </Parallax>
            <Navbar />
            <div className='absolute top-[50%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                <div className='text-xl text-white font-sans font-medium tracking-wider flex items-center justify-center'>
                    <span className='w-18 h-[1.5px] bg-white mr-4'></span>
                    À LA CARTE MENU
                    <span className='w-18 h-[1.5px] bg-white ml-4'></span>
                </div>
                <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
                    OUR MENU
                </div>
            </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-[1200px] mx-auto p-5 my-18">
        <div className="flex justify-center gap-8 pb-4 mb-8">
        {Object.keys(menuData).map((category) => (
            <div key={category} className="relative group">
            <h2
                className={`cursor-pointer pb-2 text-md font-medium ${
                activeCategory === category ? 'text-black' : 'text-black hover:text-blcack opacity-70'
                }`}
                onClick={() => setActiveCategory(category)}
            >
                {category.replace(/_/g, ' ')}
            </h2>
            <span
                className={`absolute bottom-0.5 right-0 h-0.5 bg-orange-700 transition-all duration-300 ${
                activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
            ></span>
            </div>
            ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuData[activeCategory].map((item, index) => (
            <div
            key={index}
            className="flex justify-between border-b border-gray-200 pb-4 mb-4 group">
            <div className="flex flex-col items-start">
                <h3 className="text-black opacity-95 text-[1.4rem] font-serif tracking-normal pb-1">{item.name}</h3>
                <p className="text-sm text-black font-light opacity-70">{item.description}</p>
            </div>
            <div className="flex flex-col items-end ml-auto">
                <p className="text-black opacity-95 font-medium font-serif tracking-widest mb-1.5">{item.price}</p>
                <button
                className="text-sm font-normal text-white bg-black px-4 py-0.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-orange-700 hover:text-white hover:translate-y-0.5 transition-all duration-300 ease-in"
                onClick={() => alert(`Added ${item.name} to cart`)}
                >
                ADD TO CART
                </button>
            </div>
            </div>
            ))}
        </div>

      </div>

      {/* Reservation Section */}
      <Reservation />
      
      {/* Testimonial Section - 1  */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
            {/* Images Section - Grid Layout */}
            <div className="grid grid-cols-2 gap-2 lg:gap-2 flex-1">
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-37.jpg" 
                alt="Restaurant interior" 
                className="w-full h-auto object-cover"
            />
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-38.jpg" 
                alt="Dining experience" 
                className="w-full h-auto object-cover"
            />
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-39.jpg" 
                alt="Chef preparing food" 
                className="w-full h-auto object-cover"
            />
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/choi-sungwoo-mvTvOFa-hQ4-unsplash.jpg" 
                alt="Restaurant ambiance" 
                className="w-full h-auto object-cover"
            />
            </div>

            {/* Text Content */}
            <div className='flex-1 flex flex-col justify-center items-start px-4 lg:px-0'>
                <div className="text-orange-500 text-lg font-medium tracking-widest mb-4 flex items-center">
                TESTIMONIALS
                <span className='w-16 h-0.5 bg-orange-500 ml-4'></span>
                </div>
            
                <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
                    <span className="block">WHAT PEOPLE</span>
                    <span className="block">ARE SAYING</span>
                </h1>
            
                <p className="text-lg font-light text-gray-700 mb-8 leading-relaxed">
                    We serve food, harmony, and laughter. Making delicious food and providing a wonderful eating experience since 1998.
                </p>
            
                <button className="relative text-black font-normal group pb-1">
                    LEARN MORE
                    <span className='absolute bottom-0 left-0 h-0.5 bg-orange-700 transition-all duration-300 w-full transform origin-right scale-x-100 group-hover:scale-x-0'></span>
                </button>
            </div>
        </div>
      </div>

      {/* Testimonial Section - 2 */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12"> {/* Changed to flex-row-reverse */}
          
          {/* Images - Now on the right side */}
          <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="relative flex-1">
              <img 
                className="w-full h-[50vh] min-h-[300px] object-cover rounded-lg shadow-lg"
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-8-2.jpg" 
                alt="Friends enjoying wine at our restaurant" 
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 w-16 h-16 rounded-full shadow-md hidden md:block"></div>
            </div>
            <div className="relative flex-1">
              <img 
                className="w-full h-[65vh] min-h-[400px] object-cover rounded-lg shadow-lg mt-0 md:-mt-12"
                src="https://images.unsplash.com/photo-1681219916722-bb698acc166a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww" 
                alt="Our chef adding final touches to a dish" 
              />
              <div className="absolute -top-4 -left-4 bg-white w-16 h-16 rounded-full shadow-md hidden md:block"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className='flex-1 flex flex-col justify-center items-end px-4 lg:px-0 text-right'>
            <div className="text-orange-500 text-lg font-medium tracking-widest mt-28 mb-4 flex items-center">
              <span className='w-22 h-[1.5px] bg-orange-500 mr-4'></span>
              RIGHT HERE WAITING
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6 ">
              <span className="block">VISIT OUR</span>
              <span className="block">RESTAURANT</span>
            </h1>
            <p className="text-lg font-[250] text-gray-700 mb-8 leading-relaxed tracking-wider">
              We see our customers as invited guests to a party, and we are the hosts. Piazza della Signoria, 1050122 . Firenze . Italy
              <span className="block">M: booking@patiotime.com</span>
              <span className="block">T: +39 055 1234567</span>
              
            </p>
            <button className="relative text-black font-normal group pb-1">
                GET DIRECTIONS
                <span className='absolute bottom-0 left-0 h-0.5 bg-orange-700 transition-all duration-300 w-full transform origin-right scale-x-100 group-hover:scale-x-0'></span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default MenuPage;

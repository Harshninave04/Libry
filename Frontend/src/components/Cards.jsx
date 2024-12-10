import React from 'react';

function Cards({ item }) {
  return (
    <div className="p-4 perspective-1000">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-indigo-700 dark:to-purple-900 rounded-2xl shadow-2xl transform transition-all duration-500 hover:rotate-3 hover:scale-105 overflow-hidden">
        <div className="relative">
          {/* Image with unique overlay effect */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 md:h-64 object-cover opacity-90 filter brightness-75 transition-all duration-500 group-hover:brightness-100"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 mix-blend-multiply"></div>
          </div>

          {/* Floating category chip */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-white text-xs font-bold tracking-wider uppercase">
            {item.category}
          </div>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-black text-white drop-shadow-lg">{item.name}</h2>
          </div>

          <p className="text-white/80 text-sm mb-4 italic">{item.title}</p>

          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <span className="text-xl font-bold text-white bg-white/20 px-3 py-1 rounded-full">
              {item.price}$
            </span>

            <button className="px-6 py-2 bg-white text-purple-600 font-bold rounded-full hover:bg-purple-100 transition-colors duration-300 transform hover:scale-105 hover:rotate-6 shadow-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';

function Cards({ item }) {
  return (
    <div className="p-4 group">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl ring-1 ring-black/5 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-white">
            {item.category}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {item.name}
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{item.title}</p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.price}$
            </span>

            <button className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600 transition-colors duration-300 text-sm md:text-base">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

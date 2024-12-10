import React from 'react';

function Cards({ item }) {
  return (
    <div className="p-1 w-full max-w-xs mx-auto">
      <div className="bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-[390px] flex flex-col">
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-56 object-cover grayscale-[20%] transition-all duration-300 hover:grayscale-0"
          />
          <div className="absolute top-3 right-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full px-3 py-1 text-xs font-medium">
            {item.category}
          </div>
        </div>

        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
                {item.name}
              </h2>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
                {item.price}$
              </span>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {item.title}
            </p>
          </div>

          <button className="w-full py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

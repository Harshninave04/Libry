function Cards({ item }) {
  return (
    <div className="p-3">
      <div className="card bg-white shadow-lg hover:scale-105 duration-300 transform transition-all dark:bg-slate-800 dark:text-white dark:border-2 dark:border-slate-600 rounded-lg overflow-hidden">
        <figure className="overflow-hidden rounded-t-lg">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-48 md:h-64 transition-all duration-300 ease-in-out transform hover:scale-110"
          />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-lg md:text-2xl font-semibold text-gray-800 dark:text-white flex justify-between items-center">
            <span>{item.name}</span>
            <div className="badge badge-secondary text-xs md:text-sm">{item.category}</div>
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2">{item.title}</p>
          <div className="card-actions mt-4 flex justify-between items-center">
            <div className="badge badge-outline p-2 text-sm md:text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              {item.price}$
            </div>
            <div className="badge badge-outline p-2 cursor-pointer text-sm md:text-lg hover:bg-green-600 hover:text-white dark:hover:bg-green-700 text-gray-700 dark:text-gray-300">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

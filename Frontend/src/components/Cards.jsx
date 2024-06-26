function Cards({ item }) {
  // console.log(item);
  return (
    <>
      <div className="p-3">
        <div className="card md:w-96 bg-base-100 my-1 shadow-xl hover:scale-105 duration-200 dark:bg-slate-300 dark:text-black dark:border-2">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline p-2 md:p-4">{item.price}$</div>
              <div className="badge badge-outline p-2 md:p-4 hover:bg-green-600 cursor-pointer text-white dark:text-black">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

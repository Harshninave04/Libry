function Cards({ item }) {
  // console.log(item);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
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
            <div className="badge badge-outline p-4">{item.price}$</div>
            <div className="badge badge-outline p-4 hover:bg-green-600 cursor-pointer text-white">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

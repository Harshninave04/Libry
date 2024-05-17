function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex my-12">
        <div className="text-3xl md:text-4xl w-full md:w-1/2 mt-16 md:mt-36 text-slate-500 md:text-slate-700 leading-normal md:leading-relaxed">
          Discover a world of books, both
          <span className="bg-green-300 text-black p-1 md:rounded-2xl mx-2">FREE</span> and
          <span className="bg-yellow-300 text-black p-1 md:rounded-md mx-2">PAID</span>, in our
          digital LIBRY. Dive in and explore endless stories waiting to be told.
          <div>
            <label className="bg-orange-50 input input-bordered border-black md:mt-8 active:border-orange-400 md:flex hidden items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="md:btn hidden md:btn-success md:bg-green-200 ">Submit</button>
          </div>
        </div>
        <div className="flex justify-center items-center md:flex md:justify-center md:items-center md:w-1/2 mt-4 mx-4 md:mt-16 ">
          <img src="../../public/books_png.png" alt="" className="w-72 md:w-96 h-full md:ml-28" />
        </div>
        <div className="join md:hidden mb-4 flex justify-center items-center">
          <input
            type="text"
            placeholder="username@site.com"
            className="input bg-orange-50 border-black  join-item"
          />
          <button className="btn btn-success join-item">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Banner;

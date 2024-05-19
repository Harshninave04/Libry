function Course() {
  return (
    <>
      <div className="absolute max-w-screen-2xl container mx-auto md:px-20 px-4 bg-orange-50">
        <div className="items-center justify-center text-center">
          <h1 className=" mt-28 text-2xl md:text-4xl font-semibold text-black">
            We're delighted to have you on paid courses :)
          </h1>
          <p className="text-lg md:text-xl mt-8 text-slate-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias incidunt suscipit
            quibusdam earum dicta corporis dolore consequuntur voluptatum repellat culpa eaque
            aliquam cumque quas id maxime, explicabo, laudantium sint eveniet.
          </p>
          <a className="btn text-white hover:bg-slate-700 px-4 text-base mt-8" href="/">
            Back
          </a>
        </div>
      </div>
    </>
  );
}

export default Course;

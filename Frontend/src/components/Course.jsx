import list from '../../public/list.json';
import Cards from './Cards';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-orange-50">
        <div className="flex flex-col items-center justify-center text-center py-28">
          <h1 className="text-2xl md:text-4xl font-semibold text-black">
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
        <div className="grid grid-cols-2 md:grid md:grid-cols-3 pb-4 md:pb-3 md:space-x-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

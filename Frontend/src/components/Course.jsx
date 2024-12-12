// import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('https://libry.onrender.com/book');
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className='bg-orange-50 dark:bg-black'>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-orange-50 dark:bg-black dark:text-white">
          <div className="flex flex-col items-center justify-center text-center py-28">
            <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
              Elite Collection: Unlock Knowledge with Our{' '}
              <span className="md:bg-gradient-to-r md:from-yellow-400 md:to-orange-500 md:text-black text-2xl md:text-3xl md:rounded-lg md:p-2 md:shadow-md">
                Premium Books
              </span>{' '}
              :)
            </h1>
            <p className="text-lg md:text-xl mt-8 text-slate-700 dark:text-slate-400">
              Explore a curated selection of premium books across various genres and topics,
              meticulously chosen to inspire, educate, and entertain. Whether you're seeking to
              expand your professional skills, delve into captivating fiction, or discover new
              hobbies, our exclusive collection offers something for every reader. Elevate your
              reading experience with high-quality, expertly crafted content that promises to enrich
              your mind and spark your imagination.
            </p>
            <Link to="/">
              <a
                className="btn text-white hover:bg-slate-700 px-4 text-base mt-8 dark:text-black dark:bg-white"
                href="/">
                Back
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 pb-4">
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;

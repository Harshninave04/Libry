// import list from '../../public/list.json';
// Slick library for card slider or carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import axios from 'axios';

import Slider from 'react-slick';
import Cards from './Cards';
import { useState, useEffect } from 'react';
function AvailBooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('https://libry.onrender.com/book');
        // console.log(res.data);/
        const data = res.data.filter((data) => data.category === 'Free');
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // const filterBook = list.filter((data) => data.category === 'Free');
  // console.log(filterBook);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl h-4/5 md:h-screen bg-orange-50 dark:bg-black md:bg-orange-50 container mx-auto  px-4 md:px-20 ">
        <div>
          <h1 className="text-2xl md:text-4xl md:underline font-bold text-slate-500 dark:text-white md:text-slate-700 pb-2">
            Available for you{' '}
          </h1>
          <p className="dark:text-gray-500">Books you can explore for free</p>
        </div>
        <div className="my-2 md:my-10">
          {/* <Slider {...settings}>
            {filterBook.map((item) => {
              <Cards item={item} key={item.id} />;
            })}
          </Slider> */}
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default AvailBooks;

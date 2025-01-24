import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import Img from "../../assets/image/kub.jpeg";
import Icon from "../../assets/icon/text.svg";
import Safari from "../../assets/image/safari.jpeg";
import Moon from "../../assets/image/moon.jpeg";
import Wood from "../../assets/image/wood.jpeg";
// import { Sidebar } from '../../Layout/sidebar/index';


const theme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
          </button>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
        >
          <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
        </button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: false,
      className: "",
    },
    styles: {
      base: {
        carousel: {
          position: "relative",
          width: "w-full",
          height: "h-96",
          overflowX: "overflow-x-hidden",
          display: "flex",
        },
 
        slide: {
          width: "w-full",
          height: "h-96",
          display: "inline-block",
          flex: "flex-none",
        },
      },
    },
  },
};

const Hero = ({ img, title, text, description }) => (
  <div className="max-w-md mx-auto mb-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-gray-800">
    <div className="md:flex ">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline dark:text-white">{text}</a>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </div>
  </div>
);

const Card = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div>
      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <img className="h-6 w-6" src={icon} alt="" />
      </span>
    </div>
    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      {description}
    </p>
  </div>
);

export const Home = () => {

    // Language
  const { t, i18n } = useTranslation();

  // Carousel 
  const carousels = [
    {
      img: Safari
    },
    {
      img: Moon
    },
    {
      img: Wood
    }

  ];

  // Heros
  const heros = [
    {
      img: Img,
      title: 'Company retreats',
      text: 'Incredible accommodation for your team',
      description: 'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.'
    },
    {
      img: Img,
      title: 'Company retreats',
      text: 'Incredible accommodation for your team',
      description: 'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.'
    }
  ];

  // Cards data
  const cards = [
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    },
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    },
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    },
    {
      icon: Icon,
      title: 'Writes Upside-Down',
      description: 'The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
    }
  ];





  return (
    <div className='p-3'>
      {/* language */}
      <h1>{t('Section')}</h1>
      <div className='grid lg:grid-cols-4 gap-4'>
        {/* Sidebar */}
    <aside className=" hidden lg:block lg:col-span-1 text-sm 2lg:text-lg h-full transition-transform bg-gray-50 dark:bg-gray-800" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="#" className="flex flex-wrap items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="flex-1 ms-3 whitespace-nowrap">Toshkent</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Shahri</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Toshkent</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Fargʻona</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Samarqand</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Qashqadaryo</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Andijon</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Namangan</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Surxondaryo</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Buxoro</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Xorazm</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Jizzax</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Navoiy</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="ms-3">Sirdaryo</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-wrap items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="flex-1 ms-3 whitespace-nowrap">Qoraqalpog`iston</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Respublikasi</span>
            </a>
          </li>
          {/* Add more list items here */}
        </ul>
      </div>
    </aside>
    <div className='lg:col-span-3'>
      {/* carousel */}
      <section className='container-xl my-4'>
        <Carousel className="rounded-xl h-96" navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-45 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
           )}>
            {carousels.map((carousel, index) => (
              <div key={index} className="relative">
                <img
                  src={carousel.img}
                  alt="carousel image"
                  className="h-96 w-full object-cover"
                />
              </div>
            ))}
        </Carousel>
      </section>
      {/* hero */}
      <section className='container-xl xl:flex justify-between lg:block'>
        {heros.map((hero, i) => (
          <Hero key={i} img={hero.img} title={hero.title} text={hero.text} description={hero.description} />
        ))}
      </section>
      
      {/* cards data */}
      <section className="container-xl grid gap-4 sm:grid-cols-1 md:grid-cols-2 2lg:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </section>
      <section>
        <div className='container-xl'>
          <div className="bg-white dark:bg-gray-900">
              <div className="gap-16 items-center py-8 max-w-screen-xl xl:grid xl:grid-cols-2">
                  <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-indigo-500 dark:text-white">We didn`t reinvent the wheel</h2>
                      <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                      <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                      <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                      <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                  </div>
              </div>
          </div>
        </div>
      </section>
    </div>
        
      </div>
    </div>
  );
};

import { useState, useEffect, Fragment } from "react";
import CurrencyRates from '../../config/CurrencyRates.jsx';
import { FaSun, FaMoon} from "react-icons/fa";
import { IoIosLogIn} from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBg from "../../assets/image/navbg.jpg";
import Logo from "../../assets/image/logo-gerb.png"
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';




const navigation = [
  { name: 'PORTAL HAQIDA', href: '/', current: true, dropdown: []},
  { name: 'Qo‘llab-quvvatlash', href: '/about', current: false, dropdown: [
    { name: 'Soliq', href: '/' },
    { name: 'Bojxona', href: '/' },
    { name: 'Subsidiya', href: '/' },
    { name: 'Kompensatsiya', href: '/' },
    { name: 'Kredit', href: '/' },
    { name: 'Preferensiya', href: '/' },
    { name: 'Imtiyozlar', href: '/' }
  ]},
  { name: 'Tashqi savdo', href: '/products', current: false, dropdown: [
    { name: 'Import', href: '/products' },
    { name: 'Eksport', href: '/products' },
    { name: 'Tariff', href: '/' },
    { name: 'Notariff', href: '/' },
    { name: 'UZstandard', href: '/' },
    { name: 'Xalqaro ko‘rgazmalar', href: '/' },
    { name: 'MDH', href: '/' },
    { name: 'Yevropa', href: '/' },
    { name: 'Osiyo', href: '/' },
    { name: 'Boshqa davlatlar', href: '/' }
  ]},
  { name: 'Iqtisodiy zonalar', href: '/downloads', current: false, dropdown: [
    { name: 'Qoraqalpog‘iston', href: '/downloads' },
    { name: 'Andijon', href: '/downloads' },
    { name: 'Buxoro', href: '/downloads' },
    { name: 'Jizzax', href: '/downloads' },
    { name: 'Qashqadaryo', href: '/products' },
    { name: 'Navoiy', href: '/products' },
    { name: 'Namangan', href: '/' },
    { name: 'Samarqand', href: '/' },
    { name: 'Sirdaryo', href: '/' },
    { name: 'Surxondaryo', href: '/' },
    { name: 'Farg‘ona', href: '/' },
    { name: 'Xorazm', href: '/' },
    { name: 'Toshkent V.', href: '/' },
    { name: 'Toshkent Sh.', href: '/' }

  ]},
  { name: 'Klasterlar', href: '/contact', current: false, dropdown: [
    { name: 'Qoraqalpog‘iston', href: '/downloads' },
    { name: 'Andijon', href: '/downloads' },
    { name: 'Buxoro', href: '/downloads' },
    { name: 'Jizzax', href: '/downloads' },
    { name: 'Qashqadaryo', href: '/products' },
    { name: 'Navoiy', href: '/products' },
    { name: 'Namangan', href: '/' },
    { name: 'Samarqand', href: '/' },
    { name: 'Sirdaryo', href: '/' },
    { name: 'Surxondaryo', href: '/' },
    { name: 'Farg‘ona', href: '/' },
    { name: 'Xorazm', href: '/' },
    { name: 'Toshkent V.', href: '/' },
    { name: 'Toshkent Sh.', href: '/' }
  ]},
  { name: 'Yangiliklar', href: '/downloads', current: false, dropdown: [
    { name: 'Events', href: '/downloads' },
    { name: 'Meetings', href: '/downloads' },
    { name: 'Reminders', href: '/downloads' }
  ]},
  { name: 'Kooperatsiya', href: '/downloads', current: false, dropdown: [
    { name: 'Events', href: '/downloads' },
    { name: 'Meetings', href: '/downloads' },
    { name: 'Reminders', href: '/downloads' }
  ]},
  { name: 'MUROJAAT UCHUN', href: '/downloads', current: false, dropdown: [
    { name: 'Events', href: '/downloads' },
    { name: 'Meetings', href: '/downloads' },
    { name: 'Reminders', href: '/downloads' }
  ]}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'eng');
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
  };


  // Time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
    <div>
      
      <div> 
        {/* Logo navbar */}
        <div className="flex justify-between items-center py-3 px-4">

          <div className="text-xl lg:text-3xl xl:text-4xl font-semibold text-center text-indigo-500">{time}</div>
          {/* Valyuta kursini joyi */}
          <CurrencyRates />
          <div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      onClick={toggleDarkMode}
                      className="relative rounded-full  p-1 hover:text-indigo-500"
                    >
                      <span className="sr-only">Toggle dark mode</span>
                      {darkMode ? <FaSun className="h-6 w-6" aria-hidden="true" /> : <FaMoon className="h-6 w-6" aria-hidden="true" />}
                    </button>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full  text-sm ">
                          <span className="sr-only">Select language</span>
                          <span className="text-black dark:text-gray-300 hover:text-indigo-500">{t('Language')}</span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg hover:text-indigo-500 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleChange({ target: { value: 'eng' } })}
                                className={classNames(active ? 'bg-gray-100 dark:bg-gray-500 ' : '', 'block w-full px-4 py-2 text-sm  text-gray-700 hover:text-indigo-500 dark:text-white')}
                              >
                                English
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleChange({ target: { value: 'ru' } })}
                                className={classNames(active ? 'bg-gray-100 dark:bg-gray-500 ' : '', 'block w-full px-4 py-2 text-sm  text-gray-700 hover:text-indigo-500 dark:text-white')}
                              >
                                Русский
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleChange({ target: { value: 'uz' } })}
                                className={classNames(active ? 'bg-gray-100 dark:bg-gray-500 ' : '', 'block w-full px-4 py-2 text-sm  text-gray-700 hover:text-indigo-500 dark:text-white')}
                              >
                                Uzbek
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
              </div>
          </div>
        </div>
        {/* Navbar img */}
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${NavBg})` }}>
        <div className="relative justify-center items-center flexh-28  bg-blue-500 bg-opacity-50 p-8 rounded-lg">
          <div className="w-40"><img className="w-full" src={Logo} alt="" /></div>
          <h1 className="absolute text-[50px] font-bold text-white text-shadow-lg font-mono top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SANOAT PORTALI</h1>
        </div>
      </div>
        {/* navbar */}
        <div>
        <Disclosure as="nav" className="bg-white dark:bg-gray-900">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center 2xl:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black dark:text-gray-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div>
                <div className="hidden 2xl:ml-6 2xl:block">
                  <div className="flex">
                    {navigation.map((item) => (
                      <Menu as="div" className="relative" key={item.name}>
                        <div>
                          <Menu.Button className={classNames(
                            item.current ? 'bg-indigo-500 text-white' : 'text-black dark:text-gray-300 hover:bg-indigo-500 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}>
                            {t(item.name)}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {item.dropdown.map((dropdownItem) => (
                              <Menu.Item key={dropdownItem.name}>
                                {({ active }) => (
                                  <NavLink
                                    to={dropdownItem.href}
                                    className={classNames(active ? 'bg-gray-100 dark:bg-gray-500 ' : '', 'block px-4 py-2 text-sm  text-gray-700 hover:text-indigo-500 dark:text-white')}
                                  >
                                    {t(dropdownItem.name)}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-md shadow-sm" role="group">
              <button type="button" className="items-center px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              <IoPersonOutline />
              </button>
              <button type="button" className="items-center px-2 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              <IoIosLogIn />
              </button>
            </div>

          </div>
          <Disclosure.Panel className="2xl:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-indigo-500 text-white' : ' text-black dark:text-gray-300 hover:bg-indigo-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {t(item.name)}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>                
        </div>
      </div>
      

    </div>
    </>
  );
}

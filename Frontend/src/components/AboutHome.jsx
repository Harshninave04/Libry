import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';

const socialLinks = [
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/harsh__ninave_/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/Harshninave04',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/harshninave2004',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: FaTwitter,
    href: 'https://x.com/HarshNinave2004',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const infoList = [
  { label: 'Born in', value: 'India' },
  { label: 'Experience', value: '2+ Years' },
  { label: 'Date of Birth', value: '04 November 2004' },
];

const ProfileKeyInfo = () => (
  <div>
    {infoList.map((info, i) => (
      <p className="text-2xl mb-0" key={i}>
        <span className="opacity-50 mr-2 font-light">{info.label}</span>
        <strong>{info.value}</strong>
      </p>
    ))}
  </div>
);

const SocialLinks = ({ links }) => (
  <ul className="inline-flex mt-6">
    {links.map((link, i) => (
      <li key={i} className="mr-5">
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl opacity-70 hover:opacity-100 transition duration-300">
          <link.icon />
        </a>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

export const AboutHome = () => {
  return (
    <header className="ezy__header8 md:flex md:items-center md:justify-center light py-14 md:py-24 bg-orange-50 dark:bg-[#0b1727] text-[#373572] dark:text-white">
      <div className="container px-4 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5 xl:col-span-4 lg:order-2 mb-6 lg:mb-0 text-center lg:text-start">
            <img
              src="https://harshninave.netlify.app/harsh.jpg"
              alt=""
              className="max-w-full h-auto border-[20px] grayscale hover:grayscale-0 border-white shadow-xl dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
            <p className="text-xl leading-normal mb-2 opacity-50">Full Stack Developer</p>
            <h2 className="text-3xl leading-none md:text-7xl font-bold mb-6">Harsh Ninave</h2>
            <p className="text-xl leading-normal opacity-75 mb-2">
              I'm a Full Stack Web Developer based in India and enjoy playing with creativity. I
              love Computer Science, Playing Cricket, photography & music.
            </p>

            <div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l-4">
              <ProfileKeyInfo />
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

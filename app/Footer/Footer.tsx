"use client"
import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import putko from '../../public/images/putko.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

interface SocialLink {
  path: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    path: "https://www.youtube.com/channel/UC-U0einusd8kyhjC2HBexUg",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61563346348433",
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />,
  },
  // {
  //   path: "https://www.instagram.com/",
  //   icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  // },
  // {
  //   path: "https://www.linkedin.com/",
  //   icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  // },
];

interface QuickLink {
  path: string;
  display: string;
}

const quickLink01: QuickLink[] = [
  {
    path: "/",
    display: "Putko your home",
  },
  {
    path: "/AirCover-for-Hosts",
    display: "AirCover for Hosts",
  },
  {
    path: "/Hosting-resources",
    display: "Hosting resources",
  },
  {
    path: "/Hosting-responsibly",
    display: "Hosting responsibly",
  },
  {
    path: "/airbnb-friendly",
    display: "Putko-friendly apartments",
  },
  // {
  //   path: "/",
  //   display: "Join a free Hosting class",
  // },
];

// const quickLink02: QuickLink[] = [
//   {
//     path: "/find-a-doctor",
//     display: "Newsroom",
//   },
//   {
//     path: "/",
//     display: "New features",
//   },
//   {
//     path: "/",
//     display: "Careers",
//   },
//   {
//     path: "/",
//     display: "Investors",
//   },
//   {
//     path: "/",
//     display: "Putko.org emergency stays",
//   },
// ];

const quickLink03: QuickLink[] = [
  {
    path: "/help",
    display: "Help Center",
  },
  {
    path: "/aircover",
    display: "AirCover",
  },
  {
    path: "/anti-discrimination",
    display: "Anti-discrimination",
  },
  {
    path: "/accessibility",
    display: "Disability support",
  },
  {
    path: "/Cancellation-options",
    display: "Cancellation options",
  },
  {
    path: "/Report-neighborhood",
    display: "Report neighborhood concern",
  },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <Image src={putko} alt='' />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} developed by Hamza all right reserved.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <a href={link.path} key={index} target="_blank" rel="noopener noreferrer" className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Hosting
            </h2>

            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link href={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Putko
            </h2>

            <ul>
              {quickLink02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link href={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                   {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Support
            </h2>

            <ul>
              {quickLink03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link href={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
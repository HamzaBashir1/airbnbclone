import Link from 'next/link';
import Image from 'next/image';
import putko from '../../public/images/putko_.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLink01 = [
  {
    path: "/home",
    display: "Putko your home",
  },
  {
    path: "/About",
    display: "AirCover for Hosts",
  },
  {
    path: "/services",
    display: "Hosting resources",
  },
  {
    path: "/",
    display: "Hosting responsibly",
  },
  {
    path: "/",
    display: "Putko-friendly apartments",
  },
  {
    path: "/",
    display: "Join a free Hosting class",
  },
];

const quickLink02 = [
  {
    path: "/find-a-doctor",
    display: "Newsroom",
  },
  {
    path: "/",
    display: "New features",
  },
  {
    path: "/",
    display: "Careers",
  },
  {
    path: "/",
    display: "Investors",
  },
  {
    path: "/",
    display: "Putko.org emergency stays",
  },
];

const quickLink03 = [
  {
    path: "/help-center",
    display: "Help Center",
  },
  {
    path: "/contact",
    display: "AirCover",
  },
  {
    path: "/anti-discrimination",
    display: "Anti-discrimination",
  },
  {
    path: "/contact",
    display: "Disability support",
  },
  {
    path: "/contact",
    display: "Cancellation options",
  },
  {
    path: "/contact",
    display: "Report neighborhood concern",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <Image src={putko} alt='' />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copywright © {year} developed by Hamza all right reserved.
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
          <div>
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
          </div>
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
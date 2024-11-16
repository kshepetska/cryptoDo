import chartIcon from '../assets/chart.svg';
import dashBoardIcon from '../assets/dashboardIcon.svg';
import faqIcon from '../assets/faqIcon.svg';
import starIcon from '../assets/starIcon.svg';
import userIcon from '../assets/userIcon.svg';
import NewsIcon from '../assets/news.svg';

export const sidebarLinks = [
  {
    id: 0,
    icon: dashBoardIcon,
    navIcon: dashBoardIcon,
    linkName: 'Dashboard',
    url: '/dashboard',
  },
  {
    id: 1,
    icon: NewsIcon,
    navIcon: NewsIcon,
    linkName: 'News',
    url: '/news',
  },
  {
    id: 2,
    icon: starIcon,
    navIcon: starIcon,
    linkName: 'NFTs',
    url: '/nfts',
    headerIcon: starIcon,
    headerName: 'NFTs',
  },
  {
    id: 3,
    icon: chartIcon,
    navIcon: chartIcon,
    linkName: 'Charts',
    url: '/charts',
  },
  {
    id: 4,
    icon: faqIcon,
    navIcon: faqIcon,
    linkName: 'FAQ & SUPPORT',
    url: '/faq-and-support',
  },
];

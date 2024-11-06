import {sidebarLinks} from '../components/constants';

export const getHeaderNavigationIcon = () => {
  const isProjectPage = location.pathname.includes('/dashboard/project/');
  const matchedLink = sidebarLinks.find(link => link.url === location.pathname);
  if (matchedLink) {
    const {navIcon, linkName, url, headerIcon, headerName} = matchedLink;
    return {
      navIcon: headerIcon || navIcon,
      linkName: headerName || linkName,
      url,
    };
  } else if (isProjectPage) {
    return undefined;
  }
  return sidebarLinks[0];
};

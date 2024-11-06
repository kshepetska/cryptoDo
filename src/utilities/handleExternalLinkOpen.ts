const protocolString = 'https://';
export const handleExternalLinkOpen = (link: string) =>
  window.open(
    link.startsWith(protocolString) ? link : protocolString + link,
    '_blank'
  );

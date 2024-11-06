export const formatTempId = (label: string, i: number) =>
  `${label
    ?.replace(/[^a-zA-Z0-9]/gi, '')
    .replace(' ', '-')
    ?.toLowerCase()}-${i}`;

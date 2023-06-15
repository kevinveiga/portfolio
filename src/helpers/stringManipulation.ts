export const capitalizeFirstLetter = (value: any): string => {
  return typeof value === 'string' ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : value;
};

export const truncateText = (value: any, numberOfLetters = 25): string => {
  return typeof value === 'string'
    ? value.length > numberOfLetters
      ? `${value.substring(0, numberOfLetters)}...`
      : value
    : value;
};

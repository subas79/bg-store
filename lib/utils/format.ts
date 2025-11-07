// Format utility functions
export const formatPrice = (price: number, currency: string = 'NPR'): string => {
  if (currency === 'NPR') {
    // Format Nepali Rupees with comma separators
    return `रू ${price.toLocaleString('en-NP')}`;
  }
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  }).format(price);
};

export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-GB').format(num);
};


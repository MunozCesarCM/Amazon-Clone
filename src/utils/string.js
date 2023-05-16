export const uppercaseWords = (sentence) => {
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; ++i) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(' ');
}

export const formatMoney = (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(amount);
}

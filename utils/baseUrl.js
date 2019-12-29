const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://react-reserve-455.now.sh'
    : 'http://localhost:3000';

export default baseUrl;

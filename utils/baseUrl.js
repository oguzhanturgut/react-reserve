const baseUrl =
  process.env.NODE_ENV === 'production'
    ? // ? 'https://ancient-meadow-68017.herokuapp.com'
      'https://react-reserve-455.now.sh'
    : 'http://localhost:3000';

export default baseUrl;

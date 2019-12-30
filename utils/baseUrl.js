const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://ancient-meadow-68017.herokuapp.com'
    : 'http://localhost:3000';

export default baseUrl;

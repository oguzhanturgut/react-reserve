import { useEffect } from 'react';
import axios from 'axios';

function Home(products) {
  // console.log(products);
  // const getProducts = async () => {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios(url);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products';
  const response = await axios(url);
  return { products: response.data };
};

export default Home;

const calculateCartTotal = products => {
  const total = products.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0);
  const cartTotal = ((total * 100) / 100).toFixed(2);
  const stripeTotal = Number((total * 100).toFixed(2));
  return { cartTotal, stripeTotal };
};

export default calculateCartTotal;

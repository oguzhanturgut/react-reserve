import { Input } from 'semantic-ui-react';

function AddProductToCart() {
  return (
    <Input
      type='number'
      min='1'
      placeholder='Quantity'
      action={{
        color: 'orange',
        value: '1',
        content: 'Add to Cart',
        icon: 'plus cart',
      }}
    />
  );
}

export default AddProductToCart;

// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://dbUser:dbPassword@hyf-sapzx.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: 'sdf87s6df2@424853fg123',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/ozy/image/upload',
    STRIPE_SECRET_KEY: 'sk_test_ouHolmJ0viD9rIsf4NYeqwDJ00aWHeSKI2',
  },
};

import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Oliver C',
      email: 'exampleemail@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Placeholder Product #1',
      slug: 'placeholderurl1',
      category: 'ph',
      image: '/images/1.png',
      price: 120,
      countInStock: 5,
      brand: 'ph',
      rating: 4.5,
      numReviews: 10,
      description: 'ph description',
    },

    {
      // _id: '2',
      name: 'Placeholder Product #2',
      slug: 'placeholderurl2',
      category: 'ph',
      image: '/images/2.png',
      price: 120,
      countInStock: 0,
      brand: 'ph',
      rating: 4.5,
      numReviews: 10,
      description: 'ph description',
    },

    {
      // _id: '3',
      name: 'Placeholder Product #3',
      slug: 'placeholderurl3',
      category: 'ph',
      image: '/images/3.png',
      price: 120,
      countInStock: 10,
      brand: 'ph',
      rating: 4.5,
      numReviews: 10,
      description: 'ph description',
    },

    {
      // _id: '4',
      name: 'Placeholder Product #4',
      slug: 'placeholderurl4',
      category: 'ph',
      image: '/images/4.png',
      price: 120,
      countInStock: 10,
      brand: 'ph',
      rating: 4.5,
      numReviews: 10,
      description: 'ph description',
    },
  ],
};

export default data;

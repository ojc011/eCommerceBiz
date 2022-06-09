import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Oliver Cronk',
      email: 'admin@admin.com',
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
      name: 'Placeholder Product #1',
      slug: 'placeholderurl1',
      category: 'ExampleCategory1',
      image: '/images/1.png',
      price: 60,
      countInStock: 5,
      brand: 'ph',
      rating: 4.7,
      numReviews: 10,
      description: 'ph description',
    },

    {
      name: 'Placeholder Product #2',
      slug: 'placeholderurl2',
      category: 'ExampleCategory1',
      image: '/images/2.png',
      price: 450,
      countInStock: 0,
      brand: 'ph',
      rating: 4.9,
      numReviews: 10,
      description: 'ph description',
    },

    {
      name: 'Placeholder Product #3',
      slug: 'placeholderurl3',
      category: 'ExampleCategory2',
      image: '/images/3.png',
      price: 140,
      countInStock: 10,
      brand: 'ph',
      rating: 3.1,
      numReviews: 10,
      description: 'ph description',
    },

    {
      name: 'Placeholder Product #4',
      slug: 'placeholderurl4',
      category: 'ExampleCategory2',
      image: '/images/4.png',
      price: 180,
      countInStock: 10,
      brand: 'ph',
      rating: 5.0,
      numReviews: 10,
      description: 'ph description',
    },
  ],
};

export default data;

import { faker } from '@faker-js/faker';

const generateFakeOrderData = (count = 50) => {
  const orders = [];

  for (let i = 1; i <= count; i++) {
    const order = {
      id: i,
      customerName: faker.person.fullName(),
      product: 'Anti Blue Ray Glasses',
      deliveryType: i % 2 === 0 ? 'regular' : 'express',
    };

    orders.push(order);
  }

  return orders;
};

export default generateFakeOrderData;

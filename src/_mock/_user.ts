import { faker } from '@faker-js/faker';
import { uuidv4 } from 'kimi-theme/utils/uuidv4';

import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const USER_STATUS_OPTIONS = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'banned', label: 'Banned' },
  { value: 'rejected', label: 'Rejected' },
];

export const _userAbout = {
  id: uuidv4(),
  role: faker.person.jobTitle(),
  email: faker.internet.email().toLowerCase(),
  school: faker.company.name(),
  company: faker.company.name(),
  country: faker.location.country(),
  coverUrl: _mock.image.cover(3),
  totalFollowers: faker.number.int({ min: 1000, max: 5000 }),
  totalFollowing: faker.number.int({ min: 1000, max: 5000 }),
  quote: faker.person.bio(),
  socialLinks: {
    facebook: `https://facebook.com/${faker.word.noun(10)}`,
    instagram: `https://instagram.com/${faker.word.noun(10)}`,
    linkedin: `https://linkedin.com/in/${faker.word.noun(10)}`,
    twitter: `https://twitter.com/${faker.word.noun(10)}`,
  },
};

export const _userFollowers = [...Array(18)].map((_, index) => ({
  id: uuidv4(),
  name: faker.person.fullName(),
  country: _mock.countryNames(index),
  avatarUrl: _mock.image.avatar(index),
}));

export const _userFriends = [...Array(18)].map((_, index) => ({
  id: uuidv4(),
  role: faker.person.jobTitle(),
  name: faker.person.fullName(),
  avatarUrl: _mock.image.avatar(index),
}));

export const _userGallery = [...Array(12)].map((_, index) => ({
  id: uuidv4(),
  postedAt: _mock.time(index),
  title: _mock.postTitle(index),
  imageUrl: _mock.image.cover(index),
}));

export const _userFeeds = [...Array(3)].map((_, index) => ({
  id: uuidv4(),
  createdAt: faker.date.past(),
  media: _mock.image.travel(index + 1),
  message: faker.lorem.sentence(),
  personLikes: [...Array(20)].map((__, personIndex) => ({
    name: _mock.fullName(personIndex),
    avatarUrl: _mock.image.avatar(personIndex + 2),
  })),
  comments: [...Array(3)].map((__, index2) => ({
    id: uuidv4(),
    author: {
      id: uuidv4(),
      avatarUrl: _mock.image.avatar(index2 + 1),
      name: faker.person.fullName(),
    },
    createdAt: faker.date.past(),
    message: faker.lorem.sentence(),
  })),
}));

export const _userCards = [...Array(12)].map((_, index) => ({
  id: uuidv4(),
  role: faker.person.jobTitle(),
  name: faker.person.fullName(),
  coverUrl: _mock.image.cover(index),
  avatarUrl: _mock.image.avatar(index),
  totalFollowers: faker.number.int({ min: 1000, max: 5000 }),
  totalPosts: faker.number.int({ min: 1000, max: 5000 }),
  totalFollowing: _mock.number.nativeL(index + 1),
}));

export const _userPayment = [...Array(3)].map((_, index) => ({
  id: uuidv4(),
  cardNumber: ['**** **** **** 1234', '**** **** **** 5678', '**** **** **** 7878'][index],
  cardType: ['mastercard', 'visa', 'visa'][index],
  primary: index === 1,
}));

export const _userAddressBook = [...Array(4)].map((_, index) => ({
  id: uuidv4(),
  primary: index === 0,
  name: faker.person.fullName(),
  phoneNumber: _mock.phoneNumber(index),
  fullAddress: _mock.fullAddress(index),
  addressType: (index === 0 && 'Home') || 'Office',
}));

export const _userInvoices = [...Array(10)].map((_, index) => ({
  id: uuidv4(),
  invoiceNumber: `INV-199${index}`,
  createdAt: _mock.time(index),
  price: _mock.number.price(index),
}));

export const _userPlans = [
  { subscription: 'basic', price: 0, primary: false },
  { subscription: 'starter', price: 4.99, primary: true },
  { subscription: 'premium', price: 9.99, primary: false },
];

export const _userList = [...Array(20)].map((_, index) => ({
  id: uuidv4(),
  zipCode: '85807',
  state: 'Virginia',
  city: 'Rancho Cordova',
  role: faker.person.jobTitle(),
  email: faker.internet.email().toLowerCase(),
  address: '908 Jack Locks',
  name: faker.person.fullName(),
  isVerified: _mock.boolean(index),
  company: _mock.companyNames(index),
  country: _mock.countryNames(index),
  avatarUrl: _mock.image.avatar(index),
  phoneNumber: faker.phone.number(),
  status:
    (index % 2 && 'pending') || (index % 3 && 'banned') || (index % 4 && 'rejected') || 'active',
}));

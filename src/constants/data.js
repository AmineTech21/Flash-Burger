import images from './images';

const drinks = [
  {
    title: 'Chèvre Miel',
    price: '12.7$',
    tags: '',
  },
  {
    title: 'BodyBurger (70g Protéine)',
    price: '13.5$',
    tags: '',
  },
  {
    title: 'Le Thaï',
    price: '12$',
    tags: '',
  },
  {
    title: 'Avocado',
    price: '12$',
    tags: '',
  },
  {
    title: 'Selecto',
    price: '$26',
    tags: '',
  },
];

const smoothies = [
  {
    title: 'Menu Enfant',
    price: '8$',
    tags: '',
  },
  {
    title: "Hamburger",
    price: '3$',
    tags: '',
  },
  {
    title: "Poutine",
    price: '6$',
    tags: '',
  },
  {
    title: "Nuggets",
    price: '6$',
    tags: '',
  },
  {
    title: "Tiramisu",
    price: '4$',
    tags: '',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { drinks, smoothies, awards };
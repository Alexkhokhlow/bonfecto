import product from '../interfaces/interfaces';

export const productInfo: product[] = [
  {
    id: 0,
    title: 'Бенто торт',
    description:
      'Стоимость с надписью - 35р, с рисунком - 40р.\n Вес - 400г.\n Дизайн - рисунок/надпись. \n наборе идет ложечка, свечка и открытка.\n',
    imageNames: [
      'bentos/bento',
      'bentos/bento1',
      'bentos/bento2',
      'bentos/bento3',
      'bentos/bento4',
      'bentos/bento5',
    ],
    cookingTime: 'Всегда в наличии',
    filling: [
      {
        name: 'КЛУБНИКА-ВАНИЛЬ',
        description: 'ванильный бисквит, клубничная начинка, ванильный крем',
      },
      {
        name: 'БАНОФФИ',
        description:
          'ванильный бисквит, банановая начинка с соленой карамелью, ванильный крем',
      },

      {
        name: 'ШОКОЛАД-ВИШНЯ',
        description: 'шоколадный бисквит, вишневая начинка, шоколадный крем',
      },

      {
        name: 'СНИКЕРС',
        description:
          'шоколадный бисквит, начинка солёная карамель с арахисом, шоколадный крем)',
      },
    ],
    decor: [
      { time: 3, description: 'Надпись' },
      { time: 3, description: 'Рисунок' },
      { time: 72, description: 'Печать' },
    ],
  },
  {
    id: 1,
    title: 'Мини торт',
    description:
      'Стоимость с надписью - 60р, с рисунком - 65р.\n Вес - 1,2 кг.\n Дизайн - рисунок/надпись.',
    imageNames: [
      'cakes/cake',
      'cakes/cake1',
      'cakes/cake2',
      'cakes/cake3',
      'cakes/cake4',
      'cakes/cake5',
    ],
    cookingTime: 'Заказ за 1-2 дня',
    filling: [
      {
        name: ' КРАСНЫЙ БАРХАТ',
        description:
          'красный бисквит с какао, вишневая начинка, крем на основе крем-чиза',
      },
      {
        name: 'МОЛОЧНАЯ ДЕВОЧКА',
        description:
          'ароматные коржи на сгущенке, клубничная начинка, крем на крем-чизе',
      },
      {
        name: 'МЕДОВИК',
        description: 'медовые коржи, сливочный крем',
      },
      {
        name: 'ШОКОЛАД-ВИШНЯ',
        description: 'шоколадный бисквит, вишневая начинка, шоколадный крем',
      },
    ],
    decor: [
      { time: 24, description: 'Надпись' },
      { time: 24, description: 'Рисунок' },
      { time: 72, description: 'Печать' },
    ],
  },
  {
    id: 2,
    title: 'Торты 2кг+',
    description:
      'Вес — от 2-ух кг.\n Стоимость — 45 руб/кг.\n Декор считается отдельно.',
    imageNames: [
      'cakes/cake',
      'cakes/cake1',
      'cakes/cake2',
      'cakes/cake3',
      'cakes/cake4',
      'cakes/cake5',
    ],
    cookingTime: 'Заказ за 3 дня',
    filling: [
      {
        name: ' КРАСНЫЙ БАРХАТ',
        description:
          'красный бисквит с какао, вишневая начинка, крем на основе крем-чиза',
      },
      {
        name: 'МОЛОЧНАЯ ДЕВОЧКА',
        description:
          'ароматные коржи на сгущенке, клубничная начинка, крем на крем-чизе',
      },
      {
        name: 'МЕДОВИК',
        description: 'медовые коржи, сливочный крем',
      },
      {
        name: 'ШОКОЛАД-ВИШНЯ',
        description: 'шоколадный бисквит, вишневая начинка, шоколадный крем',
      },
      {
        name: 'КОКОС-МИНДАЛЬ',
        description:
          'кокосовый бисквит, начинка шоколад-кокос, миндальный чизкейк, крем на основе маскарпоне',
      },
    ],
    decor: [
      { time: 48, description: 'Надпись' },
      { time: 48, description: 'Рисунок' },
      { time: 72, description: 'Печать' },
    ],
  },
];

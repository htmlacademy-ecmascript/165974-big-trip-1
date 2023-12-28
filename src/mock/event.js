import { getRandomArrayElement } from '../utils.js';

const mockEvents = [
  {
    id: '3ed63930-6b24-43be-b62f-793583d321cc',
    type: 'drive',
    dateFrom: '2023-12-27T10:32:22.905Z',
    dateTo: '2023-12-28T07:27:34.678Z',
    destination: '2524ed4e-6c8c-49ae-85ea-9bc8585b749a',
    basePrice: 300,
    isFavorite: false,
    offers: [
      'b3feca34-6ed9-4f15-890d-004d26e75d9f',
      '932d9b60-6cdf-4007-98d1-ea1e4486d505'
    ]
  },
  {
    id: 'bb400be2-6389-48d4-ba13-80bdf590bee0',
    type: 'check-in',
    dateFrom: '2023-12-28T07:27:34.678Z',
    dateTo: '2023-12-28T20:20:09.008Z',
    destination: '476ecb22-a340-4aea-91af-03f86c6e5570',
    basePrice: 500,
    isFavorite: false,
    offers: [
      '313620a7-7e01-49eb-8bcc-154352743e73',
      '59ec0894-8185-4f11-8018-86824b1c5eb1',
      'fd0dda03-206d-45e2-9b49-0fdbf4edb598',
      '5e850bd8-2372-430d-b748-d1d6f33679d5'
    ]
  },
  {
    id: '51705bb4-1508-4432-9d3b-8727cf614563',
    type: 'restaurant',
    dateFrom: '2023-12-28T20:20:09.008Z',
    dateTo: '2023-12-29T04:10:32.740Z',
    destination: '59d20e9c-ab64-4bdd-8dfb-5de0c402a059',
    basePrice: 1100,
    isFavorite: false,
    offers: [
      'b5eea080-6241-420f-8d9d-67a6efb2cc5c',
      'd86deb2a-a434-4319-896c-5a7e59829faa'
    ]
  },
  {
    id: '49120ca8-cdfd-4cc7-8418-a79bb1571a2c',
    type: 'sightseeing',
    dateFrom: '2023-12-29T04:10:32.740Z',
    dateTo: '2023-12-29T18:37:35.774Z',
    destination: 'a47df85f-a5e8-45c4-85c4-c38010cb0c71',
    basePrice: 1100,
    isFavorite: true,
    offers: []
  },
  {
    id: '8fd27aa2-a5b2-4309-8338-020fbcbbdb37',
    type: 'drive',
    dateFrom: '2023-12-29T18:37:35.774Z',
    dateTo: '2023-12-30T02:30:37.970Z',
    destination: 'f4632236-497f-4472-af53-aaef07c26ede',
    basePrice: 1100,
    isFavorite: true,
    offers: [
      'b3feca34-6ed9-4f15-890d-004d26e75d9f',
      '932d9b60-6cdf-4007-98d1-ea1e4486d505'
    ]
  },
  {
    id: 'b15dbfba-5d17-46c6-8ada-251c38875d3f',
    type: 'taxi',
    dateFrom: '2023-12-30T02:30:37.970Z',
    dateTo: '2023-12-30T14:59:17.874Z',
    destination: '449bcd81-7e07-4be9-ba7c-ce4b55e24e49',
    basePrice: 300,
    isFavorite: false,
    offers: [
      '3aed8ddc-79ba-4251-9628-6d5a9ba8ce3c',
      'ebdc5ad9-c321-4c11-af95-ac3848f39f7b',
      'e436cdf3-6044-43b8-9acb-fffb1c9ccd9f'
    ]
  },
  {
    id: '36f6263b-5168-4156-9afc-427fd17578fe',
    type: 'sightseeing',
    dateFrom: '2023-12-30T14:59:17.874Z',
    dateTo: '2023-12-31T03:29:04.588Z',
    destination: '8f865db7-5b51-4d6b-9e50-656c4f0bc4e1',
    basePrice: 300,
    isFavorite: false,
    offers: []
  },
  {
    id: '9fdd94b3-ac74-4f3f-afc5-56aa98a060e0',
    type: 'restaurant',
    dateFrom: '2023-12-31T03:29:04.588Z',
    dateTo: '2023-12-31T16:32:17.190Z',
    destination: 'af6d1169-a671-4454-be5c-dcdc29d1d81a',
    basePrice: 700,
    isFavorite: true,
    offers: [
      'b5eea080-6241-420f-8d9d-67a6efb2cc5c',
      'd86deb2a-a434-4319-896c-5a7e59829faa'
    ]
  },
  {
    id: 'd0347504-96a7-4ed1-ab27-fd31aca2876f',
    type: 'drive',
    dateFrom: '2023-12-31T16:32:17.190Z',
    dateTo: '2024-01-01T14:10:02.543Z',
    destination: '85687362-04be-467c-a77c-75810f760533',
    basePrice: 1000,
    isFavorite: false,
    offers: [
      'b3feca34-6ed9-4f15-890d-004d26e75d9f',
      '932d9b60-6cdf-4007-98d1-ea1e4486d505'
    ]
  },
  {
    id: '683e7c15-d805-4db4-bc24-23d24f01a1d6',
    type: 'taxi',
    dateFrom: '2024-01-01T14:10:02.543Z',
    dateTo: '2024-01-02T04:45:44.251Z',
    destination: '449bcd81-7e07-4be9-ba7c-ce4b55e24e49',
    basePrice: 500,
    isFavorite: false,
    offers: [
      '0524ba2a-9e1d-4477-84c3-9929b32cbdc0',
      'ebdc5ad9-c321-4c11-af95-ac3848f39f7b',
      '98b145f6-6f92-4706-9f7b-9b8e9347e5c8',
      'e436cdf3-6044-43b8-9acb-fffb1c9ccd9f'
    ]
  },
  {
    id: 'fe212987-6dd3-4732-884a-f96440a3220e',
    type: 'sightseeing',
    dateFrom: '2024-01-02T04:45:44.251Z',
    dateTo: '2024-01-02T09:35:38.687Z',
    destination: '85687362-04be-467c-a77c-75810f760533',
    basePrice: 600,
    isFavorite: false,
    offers: []
  },
  {
    id: 'a2efe10b-4075-4149-b516-fd55d71a3a7e',
    type: 'check-in',
    dateFrom: '2024-01-02T09:35:38.687Z',
    dateTo: '2024-01-03T01:30:41.981Z',
    destination: 'af6d1169-a671-4454-be5c-dcdc29d1d81a',
    basePrice: 400,
    isFavorite: false,
    offers: [
      '313620a7-7e01-49eb-8bcc-154352743e73',
      'fd0dda03-206d-45e2-9b49-0fdbf4edb598',
      '5e850bd8-2372-430d-b748-d1d6f33679d5'
    ]
  },
  {
    id: 'c4b3eeb8-aa2b-4c45-984c-dab21251ca60',
    type: 'sightseeing',
    dateFrom: '2024-01-03T01:30:41.981Z',
    dateTo: '2024-01-03T23:15:33.237Z',
    destination: '476ecb22-a340-4aea-91af-03f86c6e5570',
    basePrice: 1000,
    isFavorite: false,
    offers: []
  },
  {
    id: 'fff69959-4484-4951-85de-910ce7b37f14',
    type: 'bus',
    dateFrom: '2024-01-03T23:15:33.237Z',
    dateTo: '2024-01-04T07:08:11.699Z',
    destination: '485580d6-8d8b-4695-bf7d-d16dd3f89b80',
    basePrice: 500,
    isFavorite: true,
    offers: [
      '6eb80fa3-6cf4-4469-b852-0e6b08274991',
      '0eb34657-77f7-4a8b-bf26-6a92e4b5ec34',
      '3cb35270-950d-4311-a6fe-41143b510536'
    ]
  },
  {
    id: '9bd34d2e-a7ab-466c-84bc-d80e493e9b92',
    type: 'train',
    dateFrom: '2024-01-04T07:08:11.699Z',
    dateTo: '2024-01-04T14:18:59.262Z',
    destination: '59d20e9c-ab64-4bdd-8dfb-5de0c402a059',
    basePrice: 400,
    isFavorite: false,
    offers: [
      '2c1a2d7f-b481-4586-a172-20dd1592351c',
      '718ab729-dee4-438b-8827-39543f23fd3c',
      '85bde352-e7c7-4562-af4f-df018dd282a8'
    ]
  },
  {
    id: '58411f67-ddf5-4983-9ade-47d41ae054ea',
    type: 'taxi',
    dateFrom: '2024-01-04T14:18:59.262Z',
    dateTo: '2024-01-05T02:26:31.064Z',
    destination: 'bb1e4018-65c6-4d60-82c4-54b322ad166f',
    basePrice: 700,
    isFavorite: true,
    offers: [
      '98b145f6-6f92-4706-9f7b-9b8e9347e5c8',
      'e436cdf3-6044-43b8-9acb-fffb1c9ccd9f'
    ]
  },
  {
    id: 'bb9526c8-97a2-477a-a0f9-f5b6b39507ad',
    type: 'train',
    dateFrom: '2024-01-05T02:26:31.064Z',
    dateTo: '2024-01-06T00:16:06.652Z',
    destination: 'f4632236-497f-4472-af53-aaef07c26ede',
    basePrice: 300,
    isFavorite: true,
    offers: [
      '2c1a2d7f-b481-4586-a172-20dd1592351c',
      '718ab729-dee4-438b-8827-39543f23fd3c',
      '85bde352-e7c7-4562-af4f-df018dd282a8'
    ]
  },
  {
    id: '527b686e-043b-49b8-b036-8ad82216803a',
    type: 'flight',
    dateFrom: '2024-01-06T00:16:06.652Z',
    dateTo: '2024-01-06T21:16:28.874Z',
    destination: '59d20e9c-ab64-4bdd-8dfb-5de0c402a059',
    basePrice: 400,
    isFavorite: true,
    offers: [
      '1f51cf5a-eb2c-4316-acfc-14b2fcc97bd5',
      '2e55551b-c20b-453a-afa5-944e75ef3dc3',
      '51b2988d-0671-48e4-8cd7-958041e7b942',
      '57f24d44-e1cd-46a5-a442-cd7dea92aa23'
    ]
  },
  {
    id: '022edcd5-c6e1-4d9f-a341-a4a3f3f5e965',
    type: 'drive',
    dateFrom: '2024-01-06T21:16:28.874Z',
    dateTo: '2024-01-07T02:10:54.766Z',
    destination: '1807957a-e0ef-467c-873f-b9ac17a95af3',
    basePrice: 1100,
    isFavorite: false,
    offers: [
      'b3feca34-6ed9-4f15-890d-004d26e75d9f',
      '932d9b60-6cdf-4007-98d1-ea1e4486d505'
    ]
  },
  {
    id: '77913cb7-7f58-43c0-9438-b22eef6fd898',
    type: 'restaurant',
    dateFrom: '2024-01-07T02:10:54.766Z',
    dateTo: '2024-01-07T05:15:42.186Z',
    destination: 'a47df85f-a5e8-45c4-85c4-c38010cb0c71',
    basePrice: 900,
    isFavorite: false,
    offers: [
      'b5eea080-6241-420f-8d9d-67a6efb2cc5c',
      'd86deb2a-a434-4319-896c-5a7e59829faa'
    ]
  }
];

const mockDestinations = [
  {
    id: '839989fd-f49b-4827-ad99-157cd6cdce6d',
    name: 'Chamonix',
    description: 'Chamonix, is a beautiful city, a true asian pearl, in a middle of Europe, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Chamonix park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Chamonix central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Chamonix central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Chamonix embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Chamonix parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Chamonix parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Chamonix embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Chamonix embankment'
      }
    ]
  },
  {
    id: 'bffc223b-30db-493d-aed4-e7091b0dff2f',
    name: 'Geneva',
    description: 'Geneva, a true asian pearl, with crowded streets, with a beautiful old town, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Geneva biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Geneva kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Geneva parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Geneva zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Geneva city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Geneva central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Geneva parliament building'
      }
    ]
  },
  {
    id: '85687362-04be-467c-a77c-75810f760533',
    name: 'Amsterdam',
    description: 'Amsterdam, in a middle of Europe.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Amsterdam central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Amsterdam central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Amsterdam park'
      }
    ]
  },
  {
    id: 'e4d03396-702f-44c8-988d-342736b43f5d',
    name: 'Helsinki',
    description: 'Helsinki, is a beautiful city, with a beautiful old town, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Helsinki embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Helsinki parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Helsinki park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Helsinki embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Helsinki parliament building'
      }
    ]
  },
  {
    id: 'a47df85f-a5e8-45c4-85c4-c38010cb0c71',
    name: 'Oslo',
    description: 'Oslo, is a beautiful city.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Oslo biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Oslo biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Oslo street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Oslo parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Oslo city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Oslo parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Oslo zoo'
      }
    ]
  },
  {
    id: 'dc60db56-40c0-4dc3-bf39-c17eeeb0bfff',
    name: 'Kopenhagen',
    description: 'Kopenhagen, a true asian pearl, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Kopenhagen central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Kopenhagen city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Kopenhagen zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Kopenhagen park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Kopenhagen embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Kopenhagen embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Kopenhagen parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Kopenhagen embankment'
      }
    ]
  },
  {
    id: 'd88661d6-9972-4d1a-be3a-209583edd49b',
    name: 'Den Haag',
    description: 'Den Haag, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Den Haag embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Den Haag park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Den Haag park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Den Haag kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Den Haag parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Den Haag street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Den Haag embankment'
      }
    ]
  },
  {
    id: 'f52229a1-b019-4b50-a32d-c4f65c5b255b',
    name: 'Rotterdam',
    description: 'Rotterdam, a true asian pearl, with crowded streets, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Rotterdam parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Rotterdam park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Rotterdam park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Rotterdam biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Rotterdam kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Rotterdam parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Rotterdam parliament building'
      }
    ]
  },
  {
    id: '8f865db7-5b51-4d6b-9e50-656c4f0bc4e1',
    name: 'Saint Petersburg',
    description: 'Saint Petersburg, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, a perfect place to stay with a family.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Saint Petersburg biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Saint Petersburg city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Saint Petersburg park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Saint Petersburg zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Saint Petersburg kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Saint Petersburg street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Saint Petersburg central station'
      }
    ]
  },
  {
    id: '2524ed4e-6c8c-49ae-85ea-9bc8585b749a',
    name: 'Moscow',
    description: 'Moscow, is a beautiful city, a true asian pearl, middle-eastern paradise, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Moscow biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Moscow street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Moscow biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Moscow park'
      }
    ]
  },
  {
    id: 'aeb2ae5f-212d-4953-8b8a-1c64f984c10b',
    name: 'Sochi',
    description: 'Sochi, middle-eastern paradise.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Sochi zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Sochi city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Sochi parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Sochi city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Sochi central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Sochi kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Sochi central station'
      }
    ]
  },
  {
    id: 'd127ac39-27be-4f30-a4a0-010f4b6d3d3c',
    name: 'Tokio',
    description: 'Tokio, a true asian pearl, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Tokio embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Tokio central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Tokio city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Tokio city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Tokio kindergarten'
      }
    ]
  },
  {
    id: '485580d6-8d8b-4695-bf7d-d16dd3f89b80',
    name: 'Kioto',
    description: 'Kioto, is a beautiful city, for those who value comfort and coziness, a perfect place to stay with a family.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/12.jpg',
        description: 'Kioto parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Kioto zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Kioto kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Kioto biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Kioto city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Kioto zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Kioto embankment'
      }
    ]
  },
  {
    id: 'd7a6a611-0bc0-49a5-839f-e04adc742928',
    name: 'Nagasaki',
    description: 'Nagasaki, with crowded streets, with an embankment of a mighty river as a centre of attraction.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Nagasaki city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Nagasaki city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Nagasaki kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Nagasaki kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Nagasaki city centre'
      }
    ]
  },
  {
    id: '59d20e9c-ab64-4bdd-8dfb-5de0c402a059',
    name: 'Hiroshima',
    description: 'Hiroshima, with crowded streets, with a beautiful old town, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Hiroshima embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Hiroshima city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Hiroshima parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Hiroshima city centre'
      }
    ]
  },
  {
    id: '449bcd81-7e07-4be9-ba7c-ce4b55e24e49',
    name: 'Berlin',
    description: 'Berlin, a true asian pearl, with crowded streets, in a middle of Europe, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Berlin central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Berlin parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Berlin park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Berlin parliament building'
      }
    ]
  },
  {
    id: '910ecfc8-0810-4519-8f74-6cdd2bbee1a1',
    name: 'Munich',
    description: 'Munich, in a middle of Europe, for those who value comfort and coziness.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Munich city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Munich park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Munich kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Munich parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Munich embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Munich central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Munich embankment'
      }
    ]
  },
  {
    id: '463e9ec8-b77b-40d2-b6d2-e59642ea69b7',
    name: 'Frankfurt',
    description: 'Frankfurt, a true asian pearl, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Frankfurt parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Frankfurt city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Frankfurt zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Frankfurt city centre'
      }
    ]
  },
  {
    id: 'af6d1169-a671-4454-be5c-dcdc29d1d81a',
    name: 'Vien',
    description: 'Vien, is a beautiful city.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Vien street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Vien city centre'
      }
    ]
  },
  {
    id: 'd1544164-6560-4bf7-8f6e-ff21a64194e0',
    name: 'Rome',
    description: 'Rome, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Rome embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/2.jpg',
        description: 'Rome park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Rome city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Rome embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Rome central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Rome park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Rome street market'
      }
    ]
  },
  {
    id: '3bd5d119-fd29-4c68-a314-a36f48306938',
    name: 'Naples',
    description: 'Naples, is a beautiful city.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Naples street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Naples street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Naples kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Naples street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Naples street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Naples street market'
      }
    ]
  },
  {
    id: 'f4593f91-2660-4204-9d6c-fce85baa0cad',
    name: 'Venice',
    description: 'Venice, with crowded streets, middle-eastern paradise, famous for its crowded street markets with the best street food in Asia.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Venice park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/9.jpg',
        description: 'Venice parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Venice biggest supermarket'
      }
    ]
  },
  {
    id: '1807957a-e0ef-467c-873f-b9ac17a95af3',
    name: 'Milan',
    description: 'Milan, in a middle of Europe, with a beautiful old town, for those who value comfort and coziness, a perfect place to stay with a family.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Milan biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/19.jpg',
        description: 'Milan kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/17.jpg',
        description: 'Milan park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Milan street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Milan embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Milan kindergarten'
      }
    ]
  },
  {
    id: '680224f9-a4ae-40a5-87c3-036c25ae97a7',
    name: 'Monaco',
    description: 'Monaco, for those who value comfort and coziness.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Monaco city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Monaco zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Monaco park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Monaco street market'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Monaco biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Monaco city centre'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/3.jpg',
        description: 'Monaco biggest supermarket'
      }
    ]
  },
  {
    id: 'f4632236-497f-4472-af53-aaef07c26ede',
    name: 'Paris',
    description: 'Paris, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/6.jpg',
        description: 'Paris central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Paris parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/5.jpg',
        description: 'Paris biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/16.jpg',
        description: 'Paris zoo'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/14.jpg',
        description: 'Paris parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Paris park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Paris biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Paris embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Paris zoo'
      }
    ]
  },
  {
    id: '66ea0601-0940-47c6-8c79-5811b4062837',
    name: 'Barcelona',
    description: 'Barcelona, in a middle of Europe, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Barcelona biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Barcelona kindergarten'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/15.jpg',
        description: 'Barcelona central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Barcelona biggest supermarket'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/4.jpg',
        description: 'Barcelona parliament building'
      }
    ]
  },
  {
    id: 'bb1e4018-65c6-4d60-82c4-54b322ad166f',
    name: 'Valencia',
    description: 'Valencia, with crowded streets.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Valencia parliament building'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/1.jpg',
        description: 'Valencia park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/10.jpg',
        description: 'Valencia central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/8.jpg',
        description: 'Valencia park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/7.jpg',
        description: 'Valencia park'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/13.jpg',
        description: 'Valencia kindergarten'
      }
    ]
  },
  {
    id: '476ecb22-a340-4aea-91af-03f86c6e5570',
    name: 'Madrid',
    description: 'Madrid, is a beautiful city, a true asian pearl, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness.',
    pictures: [
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Madrid embankment'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/11.jpg',
        description: 'Madrid central station'
      },
      {
        src: 'https://20.ecmascript.pages.academy/static/destinations/18.jpg',
        description: 'Madrid central station'
      }
    ]
  }
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '0524ba2a-9e1d-4477-84c3-9929b32cbdc0',
        title: 'Upgrade to a business class',
        price: 190
      },
      {
        id: '3aed8ddc-79ba-4251-9628-6d5a9ba8ce3c',
        title: 'Choose the radio station',
        price: 30
      },
      {
        id: 'ebdc5ad9-c321-4c11-af95-ac3848f39f7b',
        title: 'Choose temperature',
        price: 170
      },
      {
        id: '98b145f6-6f92-4706-9f7b-9b8e9347e5c8',
        title: 'Drive quickly, I\'m in a hurry',
        price: 100
      },
      {
        id: 'e436cdf3-6044-43b8-9acb-fffb1c9ccd9f',
        title: 'Drive slowly',
        price: 110
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '6eb80fa3-6cf4-4469-b852-0e6b08274991',
        title: 'Infotainment system',
        price: 50
      },
      {
        id: '0eb34657-77f7-4a8b-bf26-6a92e4b5ec34',
        title: 'Order meal',
        price: 100
      },
      {
        id: '3cb35270-950d-4311-a6fe-41143b510536',
        title: 'Choose seats',
        price: 190
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: '2c1a2d7f-b481-4586-a172-20dd1592351c',
        title: 'Book a taxi at the arrival point',
        price: 110
      },
      {
        id: '718ab729-dee4-438b-8827-39543f23fd3c',
        title: 'Order a breakfast',
        price: 80
      },
      {
        id: '85bde352-e7c7-4562-af4f-df018dd282a8',
        title: 'Wake up at a certain time',
        price: 140
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '1f51cf5a-eb2c-4316-acfc-14b2fcc97bd5',
        title: 'Choose meal',
        price: 120
      },
      {
        id: '2e55551b-c20b-453a-afa5-944e75ef3dc3',
        title: 'Choose seats',
        price: 90
      },
      {
        id: '6ffead53-d953-48ef-b74d-cc14a359d407',
        title: 'Upgrade to comfort class',
        price: 120
      },
      {
        id: '51b2988d-0671-48e4-8cd7-958041e7b942',
        title: 'Upgrade to business class',
        price: 120
      },
      {
        id: '18f241d3-847f-4bfd-b977-a6d97e63d7fb',
        title: 'Add luggage',
        price: 170
      },
      {
        id: '57f24d44-e1cd-46a5-a442-cd7dea92aa23',
        title: 'Business lounge',
        price: 160
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '313620a7-7e01-49eb-8bcc-154352743e73',
        title: 'Choose the time of check-in',
        price: 70
      },
      {
        id: '59ec0894-8185-4f11-8018-86824b1c5eb1',
        title: 'Choose the time of check-out',
        price: 190
      },
      {
        id: 'fd0dda03-206d-45e2-9b49-0fdbf4edb598',
        title: 'Add breakfast',
        price: 110
      },
      {
        id: '308ea015-f936-41af-b8e0-4db298b417c0',
        title: 'Laundry',
        price: 140
      },
      {
        id: '5e850bd8-2372-430d-b748-d1d6f33679d5',
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'cfb1b978-ddff-4867-99bd-041726d10e25',
        title: 'Choose meal',
        price: 130
      },
      {
        id: 'a15045a9-286f-4cac-9314-3021fab7b520',
        title: 'Choose seats',
        price: 160
      },
      {
        id: 'ab7fbf73-dbbb-458b-94c4-c911efd5ead0',
        title: 'Upgrade to comfort class',
        price: 170
      },
      {
        id: '9ad3fa8a-bf9f-4626-8139-0c541d8b3114',
        title: 'Upgrade to business class',
        price: 150
      },
      {
        id: 'bc79b86a-5783-440d-a925-951b7126a6ab',
        title: 'Add luggage',
        price: 100
      },
      {
        id: 'e72ab76e-53df-48f6-a667-aca3d58b9036',
        title: 'Business lounge',
        price: 40
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'b3feca34-6ed9-4f15-890d-004d26e75d9f',
        title: 'With automatic transmission',
        price: 110
      },
      {
        id: '932d9b60-6cdf-4007-98d1-ea1e4486d505',
        title: 'With air conditioning',
        price: 180
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'b5eea080-6241-420f-8d9d-67a6efb2cc5c',
        title: 'Choose live music',
        price: 150
      },
      {
        id: 'd86deb2a-a434-4319-896c-5a7e59829faa',
        title: 'Choose VIP area',
        price: 70
      }
    ]
  }
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export { getRandomEvent };

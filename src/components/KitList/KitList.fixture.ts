import type { KitListProps } from './KitList.types';

const KitListFixture: KitListProps = {
  items: [
    { content: 'Pellentesque vitae sapien leo', id: '1' },
    { content: 'Nunc in euismod lectus', id: '2' },
    {
      content: 'Aenean magna lectus, gravida non mi et, varius mattis sapien',
      id: '3',
    },
    {
      content:
        'Donec vel sapien accumsan, scelerisque lacus placerat, placerat est',
      id: '4',
    },
  ],
};

export { KitListFixture };

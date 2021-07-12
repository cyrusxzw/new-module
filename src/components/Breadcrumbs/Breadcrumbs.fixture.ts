import type { BreadcrumbsProps } from './Breadcrumbs.types';

const BreadcrumbsFixture: BreadcrumbsProps = {
  className: 'breadcrumbs',
  items: [
    {
      label: 'Suspendisse quis elit',
      id: 'suspendisse-quis-elit',
      url: '/',
      title: 'Breadcrumb title 1',
    },
    {
      label: 'Maecenas luctus',
      id: 'maecenas-luctus',
      url: '/',
      title: 'Breadcrumb title 2',
    },
  ],
  theme: 'dark',
};

export { BreadcrumbsFixture };

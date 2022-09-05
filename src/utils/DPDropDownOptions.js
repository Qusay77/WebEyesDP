const IndustryOptions = [
  { label: 'Apparel and Accessories', value: 1 },

  { label: 'Health , personal care & beauty', value: 2 },
  { label: 'Home and Garden', value: 3 },
  { label: 'Luxury Items', value: 4 },
  { label: 'Other', value: 5 },
  // {
  //   label:
  //     'Apparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and Accessories',
  //   value: 23,
  // },
];

const AverageOrderValueOptions = [...Array(500 / 50).keys()].map((opt) => {
  const val = (opt + 1) * 50;
  return {
    label: `$${val}`,
    value: val,
    ...(val === 200 ? { default: true } : {}),
  };
});

const MonthlyVisitsOptions = [...Array(10000000 / 100000).keys()].map((opt) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  const pure = (opt + 1) * 100000;
  const val = formatter.format(pure);
  return {
    label: `$${val}`,
    value: pure,
    ...(pure === 1000000 ? { default: true } : {}),
  };
});

const platformOptions = [
  {
    label: 'Shopify Plus',
    value: 'Shopify Plus',
  },
  {
    label: 'Magento',
    value: 'Magento',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];

export {
  IndustryOptions,
  AverageOrderValueOptions,
  MonthlyVisitsOptions,
  platformOptions,
};

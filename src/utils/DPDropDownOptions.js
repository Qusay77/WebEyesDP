const IndustryOptions = [
  { label: 'Apparel and Accessories', value: 1 },

  { label: 'Health and Beauty', value: 2 },
  { label: 'Home and Garden', value: 3 },
  { label: 'Luxury Items', value: 4 },
  { label: 'Other', value: 5 },
  // {
  //   label:
  //     'Apparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and AccessoriesApparel and Accessories',
  //   value: 23,
  // },
];
const AverageOrderValueOptions = [
  { label: '$50', value: 50 },
  { label: '$100', value: 100 },
  { label: '$150', value: 150 },
  { label: '$200', value: 200, default: true },
  { label: '$250', value: 250 },
  { label: '$300', value: 300 },
  { label: '$400', value: 400 },
  { label: '$500', value: 500 },
];
const AverageOrderValueOptionsMobile = [...Array(500 / 50).keys()].map(
  (opt) => {
    const val = (opt + 1) * 50;
    return {
      label: `$${val}`,
      value: val,
      ...(val === 200 ? { default: true } : {}),
    };
  },
);
const MonthlyVisitsOptionsMobile = [...Array(100000000 / 100000).keys()].map(
  (opt) => {
    const formatter = Intl.NumberFormat('en', {
      notation: 'compact',
      maximumSignificantDigits: 4,
    });
    const pure = (opt + 1) * 100000;
    const val = formatter.format(pure);
    return {
      label: `${val}`,
      value: pure,
      ...(pure === 1000000 ? { default: true } : {}),
    };
  },
);
const MonthlyVisitsOptions = [
  { label: '100K', value: 100000 },
  { label: '250K', value: 250000 },
  { label: '500K', value: 500000 },
  { label: '750K', value: 750000 },
  { label: '1M', value: 1000000, default: true },
  { label: '2M', value: 2000000 },
  { label: '3M', value: 3000000 },
  { label: '4M', value: 4000000 },
  { label: '5M', value: 5000000 },
  { label: '6M', value: 6000000 },
  { label: '7M', value: 7000000 },
  { label: '8M', value: 8000000 },
  { label: '9M', value: 9000000 },
  { label: '10M', value: 10000000 },
  { label: '15M', value: 15000000 },
  { label: '20M', value: 20000000 },
  { label: '25M', value: 250000000 },
  { label: '50M', value: 50000000 },
  { label: '100M', value: 1000000000 },
];
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

const dropDownEvents = {
  industryId: 'DP - Industry changed',
  aov: 'DP - AOV Changed',
  numberOfVisits: 'DP - Number of visitors changed',
};
export {
  IndustryOptions,
  AverageOrderValueOptions,
  MonthlyVisitsOptions,
  platformOptions,
  MonthlyVisitsOptionsMobile,
  AverageOrderValueOptionsMobile,
  dropDownEvents,
};

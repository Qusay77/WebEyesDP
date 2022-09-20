import store from '../redux/configureStore';
import { setChoice } from '../redux/DPSlice';
import {
  AverageOrderValueOptions,
  IndustryOptions,
  MonthlyVisitsOptions,
} from './DPDropDownOptions';

const paramDefinition = {
  industry: {
    checker: (v) =>
      typeof v === 'string'
        ? IndustryOptions.find((e) => e.label === v)?.value
        : null,
    key: 'industryId',
    optionsChecker: IndustryOptions,
  },
  aov: {
    checker: (v) => (Number.isInteger(Number(v)) ? Number(v) : null),
    key: 'aov',
    optionsChecker: AverageOrderValueOptions,
  },
  visitors: {
    checker: (v) => (Number.isInteger(Number(v)) ? Number(v) : null),
    key: 'numberOfVisits',
    optionsChecker: MonthlyVisitsOptions,
  },
};

const queryParams = (setParams) => {
  const path = window.location.pathname;
  const isEncoded = path.includes('%3F');
  const [, pathOrigin, arg] = path.split('/');
  const industry = isEncoded ? arg.split('%3F')[0] : arg;
  const search = isEncoded ? arg.split('%3F') : window.location.search;
  const [, qs] = isEncoded ? search : search.split('?');
  const original = decodeURIComponent(industry.replace(' ', '+'));
  const values = [
    ...(original.length ? [`industry=${original}`] : []),
    ...(qs ? [...qs.split('&')] : []),
  ];
  const paramsArr = values
    .map((param) => {
      const pair = param.split('=');
      const [key, value] = pair;
      const isListed = paramDefinition[key];
      const valueCheck = paramDefinition[key]?.checker(value);
      const optionCheck = paramDefinition[key]?.optionsChecker.find(
        (e) => e.value === valueCheck,
      );
      if (isListed && optionCheck) {
        return { [key]: optionCheck };
      }
      return null;
    })
    .filter((e) => e);
  const validIndustry = paramsArr.find((e) => e.industry)
    ? industry
    : IndustryOptions[0].label;
  if (paramsArr.length !== values.length && !setParams) {
    const correctedQs = paramsArr
      .filter((e) => !e.industry)
      .map((param) => {
        const [[k, v]] = Object.entries(param);
        return `${k}=${v.value}`;
      })
      .join('&');

    if (
      correctedQs.length ||
      !IndustryOptions.find((e) => e.label === original) ||
      (paramsArr.length && !correctedQs.length)
    ) {
      console.log(validIndustry, correctedQs);

      window.location.href = `${
        window.location.origin
      }/${pathOrigin}/${validIndustry}${
        correctedQs.length ? `?${correctedQs}` : ''
      }`;
    }
  }
  if (setParams) {
    const [k, val] = setParams;
    const industryValue =
      k === 'industryId'
        ? IndustryOptions.find((e) => e.value === val)?.label
        : validIndustry;
    const key =
      (k === 'aov' && 'aov') || (k === 'numberOfVisits' && 'visitors');
    const correctedQs = [
      ...paramsArr
        .filter((e) => !e.industry || e[key])
        .map((param) => {
          const [[k, v]] = Object.entries(param);
          if (k === key) {
            return ``;
          }
          return `${k}=${v.value}`;
        }),
      ...(k === 'industryId' ? [] : [`${key}=${val}`]),
    ].join('&');

    history.pushState(
      null,
      null,
      `/${pathOrigin}/${industryValue}${
        correctedQs.length ? `?${correctedQs}` : ''
      }`,
    );
  } else {
    const choiceOptions = paramsArr.map((param) => {
      const [[k, v]] = Object.entries(param);
      return [paramDefinition[k]?.key, v];
    });
    store.dispatch(setChoice({ multiple: choiceOptions }));
  }
};

const multipleQuery = () => {
  const path = window.location.pathname;
  const [, pathOrigin] = path.split('/');
  const { DPState } = store.getState('DPState');
  const { industryId, aov, numberOfVisits } = DPState;
  history.pushState(
    null,
    null,
    `/${pathOrigin}/${industryId.label}?aov=${aov.value}&visitors=${numberOfVisits.value}`,
  );
};

export { queryParams, multipleQuery };

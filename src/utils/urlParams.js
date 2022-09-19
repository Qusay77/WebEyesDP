import store from '../redux/configureStore';
import { setChoice } from '../redux/DPSlice';
import theme from '../ui/theme';
import {
  AverageOrderValueOptions,
  AverageOrderValueOptionsMobile,
  IndustryOptions,
  MonthlyVisitsOptions,
  MonthlyVisitsOptionsMobile,
} from './DPDropDownOptions';

const currentSize = window.innerWidth;
const isMobile = currentSize <= theme.breakpoints.magicMachineInt;

const paramDefinition = {
  industry: {
    checker: (v) => (typeof v === 'string' ? v : null),
    key: 'industryId',
    optionsChecker: IndustryOptions,
  },
  aov: {
    checker: (v) => (Number.isInteger(Number(v)) ? Number(v) : null),
    key: 'aov',
    optionsChecker: isMobile
      ? AverageOrderValueOptionsMobile
      : AverageOrderValueOptions,
  },
  visitors: {
    checker: (v) => (Number.isInteger(Number(v)) ? Number(v) : null),
    key: 'numberOfVisits',
    optionsChecker: isMobile
      ? MonthlyVisitsOptionsMobile
      : MonthlyVisitsOptions,
  },
};

const queryParams = () => {
  const path = window.location.pathname;
  const [, pathOrigin, qs] = path.split('/');
  const values = qs.split('&');
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
  if (paramsArr.length !== values.length) {
    const correctedQs = paramsArr
      .map((param) => {
        const [[k, v]] = Object.entries(param);
        return `${k}=${v.value}`;
      })
      .join('&');
    if (correctedQs.length) {
      window.location.pathname = `${pathOrigin}/${correctedQs}`;
    }
  }
  const choiceOptions = paramsArr.map((param) => {
    const [[k, v]] = Object.entries(param);
    return [paramDefinition[k]?.key, v];
  });
  store.dispatch(setChoice({ multiple: choiceOptions }));
};

export { queryParams };

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import CustomPieChartToolTip from './CustomPieChartToolTip';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';

const PercentagePieChart = ({ problems, color, index }) => {
  const data = problems.map(({ percentage, title, lostRevenue }) => ({
    title,
    lostRevenue,
    value: percentage,
    color: `rgba(${color},${(percentage / 2 + 50) / 100})`,
  }));

  const onPieEnter = (e) => {
    if (e) {
      let toolTipWrapper = document.getElementsByClassName(
        'recharts-tooltip-wrapper',
      )[index];
      toolTipWrapper.style.transition = 'transform 800ms ease 0.2s';
      toolTipWrapper.style.transform =
        'translate(' +
        (e.tooltipPosition.x - 18) +
        'px, ' +
        (e.tooltipPosition.y - 106) +
        'px)';
    }
  };
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });

  const chartDims = isMobile
    ? { cx: 45, cy: 45, innerRadius: 35, outerRadius: 50 }
    : { cx: 55, cy: 55, innerRadius: 40, outerRadius: 60 };

  return (
    <ResponsiveContainer width={120} height={120}>
      <PieChart>
        <Pie
          stroke="none"
          data={data}
          {...chartDims}
          dataKey="value"
          onMouseMove={onPieEnter}
        >
          {data.map(({ color }, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Pie>
        <Tooltip
          position={{}}
          wrapperStyle={{
            boxSizing: 'border-box',
            outline: 'none',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
          content={<CustomPieChartToolTip />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PercentagePieChart;

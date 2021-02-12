import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { COLOR_STEP, NUMBER_OF_COLORS } from "../../constants";

export const Chart = () => {
  const { dataTable } = useSelector((state) => state.content);
  const dateArr = new Set(dataTable.map((element) => element.date));
  const nameShares = [...new Set(dataTable.map((element) => element.name))];
  const trueDate = [...dateArr];
  const dataToCharts = nameShares.map((name) => {
    const findDate = dataTable.filter((element) => element.name === name);
    const data = findDate.map((element) => {
      return {
        category: element.date,
        value: +element.cost,
      };
    });
    return {
      name,
      data,
    };
  });
  const createColor = (element) =>
    `#${Math.floor(
      ((nameShares.indexOf(element) + COLOR_STEP) / (COLOR_STEP * COLOR_STEP)) *
        NUMBER_OF_COLORS
    ).toString(16)}`;
  const line = dataToCharts.map((element, index) => (
    <Line
      key={element.name}
      name={element.name}
      type="monotone"
      dataKey="value"
      data={element.data}
      stroke={createColor(element.name)}
      activeDot={{ r: 8 }}
    />
  ));
  return (
    <LineChart
      data={dataToCharts}
      width={800}
      height={400}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="10 10" />
      <XAxis
        dataKey="category"
        type="category"
        allowDataOverflow={true}
        allowDuplicatedCategory={false}
        domain={trueDate}
      />
      <YAxis dataKey="value" domain={["0", "dataMax"]} />
      <Tooltip />
      <Legend />
      {line}
    </LineChart>
  );
};

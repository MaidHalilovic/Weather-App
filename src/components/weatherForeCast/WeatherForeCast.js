import React from "react";
import { CompositeChart } from "@mantine/charts";
import { data } from "../../data/data";

const weatherForeCast = () => {
  return (
    <div>
      <CompositeChart
        h={300}
        data={data}
        dataKey='date'
        maxBarWidth={30}
        series={[
          { name: "Tomatoes", color: "rgba(18, 120, 255, 0.2)", type: "bar" },
          { name: "Apples", color: "red.8", type: "line" },
          { name: "Oranges", color: "yellow.8", type: "area" },
        ]}
        curveType='natural'
        tickLine='none'
        gridAxis='none'
        withYAxis={false}
      />
    </div>
  );
};

export default weatherForeCast;

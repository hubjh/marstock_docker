import React, { useState } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const ChartContainer = styled.div`
  margin: 20px;
  display: flex;
  position: relative;
  width: 55rem;
  height: 24rem;
  justify-content: center;
`;

const GradationChart = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Sales",
        data: [
          -8000000, -7000000, -6000000, -5000000, -4000000, -3000000, -2000000,
          -1000000, -500000, 0, 500000, 1000000, 2000000, 3000000, 4000000,
          5000000, 6000000, 7000000, 8000000, 9000000,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },

      stroke: {
        width: 5,
        curve: "smooth",
        dashArray: 0,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/18/2024",
          "1/19/2024",
          "1/20/2024",
          "1/21/2024",
          "1/22/2024",
          "1/23/2024",
          "1/23/2024",
          "1/24/2024",
          "1/25/2024",
          "1/26/2024",
          "1/27/2024",
          "1/28/2024",
          "1/29/2024",
          "1/30/2024",
          "1/31/2024",
          "2/1/2024",
          "2/2/2024",
          "2/3/2024",
          "2/4/2024",
          "2/5/2024",
          "2/6/2024",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
          style: {
            colors: "white",
          },
        },
      },
      title: {
        text: "My Revenue Chart",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10000000,
        max: 10000000,
        labels: {
          style: {
            colors: "white",
          },
        },
      },
    },
  });

  return (
    <ChartContainer>
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="line"
          height={240}
          width={540}
        />
      </div>
      <div id="html-dist"></div>
    </ChartContainer>
  );
};

export default GradationChart;

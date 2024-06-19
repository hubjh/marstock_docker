import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const ChartContainer = styled.div`
  margin: 20px;
  display: flex;
  position: relative;
  width: 100%;
  height: 24rem;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StockInfoChart = ({ chartData }) => {
  // console.log(chartData);

  useEffect(() => {
    // Update the series and options when chartData changes
    const newCategories = [
      ...chartData.actual_price.index.map((dateString) =>
        new Date(dateString).getTime()
      ),
      ...chartData.future_price.index.map((dateString) =>
        new Date(dateString).getTime()
      ),
    ];

    const newSeries = [
      {
        name: "실제 가격",
        data: [
          ...chartData.actual_price.data,
          ...Array(chartData.future_price.data.length).fill(null),
        ],
      },
      {
        name: "예측 가격",
        data: [
          ...Array(chartData.actual_price.data.length).fill(null),
          ...chartData.future_price.data,
        ],
        color: "#FF5733", // Choose a color for the prediction line
      },
    ];

    const newOptions = {
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
        categories: newCategories,
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
        text: `${chartData.column_type} 그래프`,
        align: "left",
        style: {
          fontSize: "16px",
          color: "#fff",
        },
      },
      fill: {
        type: "solid", // Set to "solid" to remove gradient
        color: ["blue"], // Choose a color for the area under the curve
        // type: "gradient",
        // gradient: {
        //   shade: "dark",
        //   gradientToColors: ["#FDD835"],
        //   shadeIntensity: 1,
        //   type: "horizontal",
        //   opacityFrom: 1,
        //   opacityTo: 1,
        //   stops: [0, 100, 100, 100],
        // },
      },
      yaxis: {
        labels: {
          style: {
            colors: "white",
          },
          formatter: function (value) {
            return value / 10000 + "만원";
          },
        },
      },
    };

    setChartState({
      series: newSeries,
      options: newOptions,
    });
  }, [chartData]);

  const [chartState, setChartState] = useState({
    series: [
      {
        name: "실제 가격",
        data: chartData.actual_price.data,
      },
      {
        name: "예측 가격",
        data: chartData.future_price.data,
        color: "#FF5733", // Choose a color for the prediction line
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: 2,
        curve: "smooth",
        dashArray: 0,
      },
      xaxis: {
        type: "datetime",
        categories: [
          ...chartData.actual_price.index.map((dateString) =>
            new Date(dateString).getTime()
          ),
          ...chartData.future_price.index.map((dateString) =>
            new Date(dateString).getTime()
          ),
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
        text: `${chartData.column_type} 그래프`,
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
        labels: {
          style: {
            colors: "white",
          },
          formatter: function (value) {
            return value / 10000 + "만원";
          },
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        labels: {
          colors: "white",
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
          height={300}
          width="200%"
        />
      </div>
      <div id="html-dist"></div>
    </ChartContainer>
  );
};

export default StockInfoChart;

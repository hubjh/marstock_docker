import React from "react";
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
    width: 40rem;
  }
`;

const MyChart = ({ stockList, socketList }) => {
  const chartState = {
    series: [
      {
        name: "Sales",
        data: stockList?.map(
          (buy) =>
            buy.buyCount * buy.buyPrice -
            socketList
              .filter((socket) =>
                socket.latestStock.some((data) => data?.stockName === buy.name)
              )
              .map(
                (filteredSocket) =>
                  filteredSocket.latestStock.find(
                    (data) => data?.stockName === buy.name
                  )?.stockClose || 0
              ) *
              buy.buyCount,
          0
        ),
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
        categories: stockList?.map((data) => new Date(data.date).getTime()),
        tickAmount: 10,
        labels: {
          formatter: function (timestamp) {
            const formattedDate = new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
            }).format(new Date(timestamp));

            return formattedDate;
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
        min: -500000,
        max: 500000,
        labels: {
          style: {
            colors: "white",
          },
          formatter: function (value) {
            return value / 10000 + "만원";
          },
        },
      },
    },
  };
  return (
    <ChartContainer>
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="line"
          height={240}
          width="130%"
        />
      </div>
      <div id="html-dist"></div>
    </ChartContainer>
  );
};

export default MyChart;

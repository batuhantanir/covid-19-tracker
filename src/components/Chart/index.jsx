import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";
import {
  countrySelector,
  covid19Selector,
  isLoadingSelector,
} from "../../store/Slices/covid19Slice";

const index = () => {
  const covidData = useSelector(covid19Selector)[0];
  console.log(covidData);
  const country = useSelector(countrySelector);
  console.log(country);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Current state in ${country || "the world"}`,
      },
    },
  };

  const labels = ["Infected", "Recovered", "Deaths", "Active"];

  const data = {
    labels,
    datasets: [
      {
        label: "People",
        data: [
          Number(
            covidData?.totalCases
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
          ),
          Number(
            covidData?.totalRecovered
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
          ),
          Number(
            covidData?.totalDeaths
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
          ),
          Number(
            covidData?.activeCases
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
              .replace(",", "")
          ),
        ],
        backgroundColor: [
          "rgb(191, 219, 254)",
          "rgb(187, 247, 208)",
          "rgb(254, 202, 202)",
          "rgb(254, 240, 138)",
        ],
      },
    ],
  };

  const isLoading = useSelector(isLoadingSelector);




  return <div className="w-[75%] my-5">
    <Bar  options={options} data={data} />
    </div>
};

export default index;

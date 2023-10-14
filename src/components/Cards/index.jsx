import React from "react";
import Card from "../Card";
import { useSelector } from "react-redux";
import { covid19Selector } from "../../store/Slices/covid19Slice";

const Cards = () => {
  const data = useSelector(covid19Selector)[0];
  console.log(data);
  return (
    <div className="flex justify-center mt-14">
      {/* Infected */}
      <Card total={data.totalCases} title={"Infected"} />
      {/* Recovered */}
      <Card total={data.totalRecovered} title={"Recovered"} />
      {/* Deaths */}
      <Card total={data.totalDeaths} title={"Deaths"} />
      {/* Active */}
      <Card total={data.activeCases} title={"Active"} />
    </div>
  );
};

export default Cards;

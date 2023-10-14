import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countrySelector,
  fetchCovid19,
  isLoadingSelector,
} from "./store/Slices/covid19Slice";
//Components
import Header from "./components/Header";
import Cards from "./components/Cards";
import CountryInput from "./components/CountryInput";
import Chart from "./components/Chart";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const country = useSelector(countrySelector);
  // console.log(country);
  useEffect(() => {
    dispatch(fetchCovid19({ country }));
  }, [dispatch, country]);

  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen">
      <Header />
      {isLoading === false ? (
        <>
          <Cards />
          <CountryInput />
          <Chart />
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default App;

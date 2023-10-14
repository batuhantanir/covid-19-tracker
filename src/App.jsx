import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovid19, isLoadingSelector } from "./store/Slices/covid19Slice";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  console.log(isLoading);
  useEffect(() => {
    dispatch(fetchCovid19());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen">
      {isLoading === false ? <Header /> : <div>loading...</div>}
    </div>
  );
}

export default App;

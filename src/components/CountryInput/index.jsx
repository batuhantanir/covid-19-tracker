import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countrySelector,
  fetchCovid19,
  setCountry,
} from "../../store/Slices/covid19Slice";

const CountryInput = () => {
  const dispatch = useDispatch();
  const [countr, setCountr] = useState("");
  const country = useSelector(countrySelector);

  const handleChange = (e) => {
    e.target.value !== undefined && setCountr(e.target.value);
  };
  useEffect(() => {
    dispatch(setCountry(countr));
  }, [countr]);

  return (
    <select
      className="border border-black my-6 rounded px-2 py-1"
      name="country"
      id="country"
      onChange={(e) => {
        handleChange(e);
      }}
      value={country}
    >
      <option value="China">China</option>
      <option value="Turkey">Turkey</option>
      <option value="USA">USA</option>
      <option value="Germany">Germany</option>
      <option value="France">France</option>
      <option value="Italy">Italy</option>
      <option value="Japan">Japan</option>
    </select>
  );
};

export default CountryInput;

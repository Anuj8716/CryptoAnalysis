import React, { useContext, useRef } from "react";
import selectIcon from "../assets/select-icon.svg";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from './../context/CryptoContext';
import Search from "./Search";

const Filters = () => {

  const {setSortBy,setCurrency,clearSearch} = useContext(CryptoContext);
  const currencyRef = useRef(null);

const handleSort = (e) => {
  let val = e.target.value;
  setSortBy(val);
}

const handleCurrencySubmit = (e) => {
  e.preventDefault();
  let val = currencyRef.current.value;
  setCurrency(val);
  currencyRef.current.value = "";
}

  return (
    <div className=" w-full lg:h-12 h-full lg:border-2 rounded-lg border-solid lg:border-gray-100 border-0
   flex lg:flex-row
    flex-col lg:items-center lg:justify-between relative
    align-start justify-between

    ">
      <Search />

      <div className="flex lg:mr-7 justify-between mt-4 lg:mt-0 sm:flex-row flex-col relative">
        <form className="relative flex items-center font-nunito md:mr-12 mr-1" onSubmit={handleCurrencySubmit}>
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center "
          >
            <span className="mr-2  sm:text-base text-sm sm:font-bold font-medium">currency: </span>
          </label>

          <input
            type="text"
            name="currency"
            ref={currencyRef}
            placeholder="usd"
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100  placeholder:text-base required outline-0 
    border border-transparent focus:border-cyan leading-4  sm:text-base text-sm sm:p-0 sm:pl-2 p-1
    "
          />
          <button type="submit" className="ml-1 cursor-pointer">
            <img src={submitIcon} alt="CryptoBucks" className="w-full h-auto" />
          </button>
        </form>

       

        <label
          htmlFor="sortby"
          className="relative flex sm:justify-center justify-start items-center mt-4 sm:mt-0"
        >
          <span className="mr-2 sm:font-bold font-medium sm:text-base text-sm w-16">sort by: </span>
          <select
            name="sortby"
            className="rounded bg-gray-200 sm:text-base text-sm pl-2 pr-10 py-1.5 focus:outline-0 text-white appearance-none capitalize leading-4
            w-full sm:w-48
            "
          onClick={handleSort}
          >
            <option className="sm:text-base text-sm" value="market_cap_desc">market cap desc</option>
            <option className="sm:text-base text-sm" value="market_cap_asc">market cap asc</option>
            <option className="sm:text-base text-sm" value=" volume_desc">volume desc</option>
            <option className="sm:text-base text-sm" value="volume_asc">volume asc</option>
            <option className="sm:text-base text-sm" value="id_desc">id desc</option>
            <option className="sm:text-base text-sm" value="id_ascc">id asc</option>
            <option className="sm:text-base text-sm" value="gecko_desc">gecko desc</option>
            <option className="sm:text-base text-sm" value="gecko_asc">gecko asc </option>
            
          </select>
          <img
            src={selectIcon}
            alt="CryptoBucks"
            className="w-[1rem] absolute right-1 top-2 pointer-events-none"
          />
        </label>
        <button className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
        absolute right-0 top-0 sm:relative
        " onClick={() => clearSearch()}>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className="w-full h-full fill-cyan"
    style={{
      msTransform: "rotate(360deg)",
      WebkitTransform: "rotate(360deg)",
      transform: "rotate(360deg)",
    }}
  >
    <path
      
      d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"
    />
    <path
      
      d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"
    />
    <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
  </svg>
        </button>
      </div>
    </div>
  );
};

export default Filters;

// <span class="absolute inset-y-0 left-0 flex items-center pl-2">
//     <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
//   </span>

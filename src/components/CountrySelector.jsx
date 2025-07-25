import React from "react";

const CountrySelector = ({ countries, selectedCountry, onSelect }) => (
  <div className="grid grid-cols-10 gap-3 pb-2">
    {countries.map((country) => {
      const isSelected = country.code === selectedCountry;
      return (
        <button
          key={country.code}
          onClick={() => onSelect(country.code)}
          className={`relative flex flex-col items-center justify-center w-full h-24 border text-xs font-normal transition-all duration-200 p-1
            ${isSelected
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300 hover:border-black"
            }
            focus:outline-none`}
        >
          {/* 国旗 */}
          <span className="text-xl mb-1 mt-1">{country.flag}</span>
          {/* 国家名称 */}
          <span className="font-medium text-xs text-center leading-tight px-0 mt-0.5">
            {country.name}
          </span>
          {/* 选中状态指示器 */}
          {isSelected && (
            <span className="absolute top-1.5 right-1.5 w-5 h-5 flex items-center justify-center bg-white text-black border border-gray-300" style={{ borderRadius: '50%' }}>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          )}
        </button>
      );
    })}
  </div>
);

export default CountrySelector;

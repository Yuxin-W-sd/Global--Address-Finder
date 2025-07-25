import React from "react";
import { addressExamples } from "../data/addressExamples";

const AddressExample = ({ countryCode, language = "en" }) => {
  const countryExamples = addressExamples[countryCode];
  
  if (!countryExamples) {
    return (
      <div className="text-center text-gray-500 py-4">
        Address examples not available for this country.
      </div>
    );
  }

  const example = countryExamples.examples[0]; // Show only first example
  const displayText = language === "en" ? example.en : example.local;

  return (
    <div className="space-y-4 bg-white border border-gray-200 rounded-sm p-6">
      <h3 className="text-xl font-normal text-black">
        Address Example
      </h3>
      <div>
        <div className="text-xs text-black font-mono whitespace-pre-line leading-relaxed">
          {displayText}
        </div>
      </div>
    </div>
  );
};

export default AddressExample; 
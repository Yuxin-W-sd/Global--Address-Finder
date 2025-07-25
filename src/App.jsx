import React, { useState } from "react";
import DesignerReference from "./components/DesignerReference";
import CountrySelector from "./components/CountrySelector";
import AddressFormStructure from "./components/AddressFormStructure";
import AddressExample from "./components/AddressExample";
import { countries } from "./data/countries";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header Section */}
        <div className="mb-6 pb-0">
          <div className="flex flex-row items-end justify-between mb-8">
            <h1 className="text-6xl font-medium text-black text-left whitespace-nowrap">Global Address Forms</h1>
            <p className="text-xl font-[300] text-gray-600 text-right ml-8 whitespace-normal max-w-md">Each country has its own address format. <br/>Choose yours to get started.</p>
          </div>
          <div className="border border-black border-[0.5px] mb-10"></div>
          {/* Country Selector */}
          <div className="w-full">
            <CountrySelector
              selectedCountry={selectedCountry}
              onSelect={setSelectedCountry}
              countries={countries}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 text-sm text-black">
          {/* Left Column - Address Form */}
          <div className="lg:col-span-2">
            <AddressFormStructure
              countryCode={selectedCountry}
              language={language}
              onLanguageChange={setLanguage}
            />
          </div>

          {/* Right Column - Examples and References */}
          <div className="flex flex-col gap-8">
            <AddressExample
              countryCode={selectedCountry}
              language={language}
            />
            <DesignerReference countryCode={selectedCountry} />
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 w-screen z-50 bg-white">
          <div className="border-t border-gray-300" style={{ borderTopWidth: '0.5px' }}></div>
          <footer className="text-center py-1">
            <p className="text-gray-400 text-xs mb-0.5">Designed by Yuxin Wang</p>
            <div className="text-gray-300 text-xs">
              <a href="mailto:yuxin.wang.sd@gmail.com" className="hover:text-gray-500 transition-colors">yuxin.wang.sd@gmail.com</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

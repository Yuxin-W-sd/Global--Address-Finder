import React, { useState } from "react";
import CountrySelector from "./components/CountrySelector";
import AddressFormStructure from "./components/AddressFormStructure";
import AddressExample from "./components/AddressExample";
import DesignerReference from "./components/DesignerReference";
import { countries } from "./data/countries";

const MainPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      {/* Header: 标题 + 语言切换 */}
      <header className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center mb-8 px-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Global Address Finder</h1>
          <p className="text-gray-500">Each country has its own address format. Choose yours to get started.</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <span className="text-sm text-gray-600">Language:</span>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("jp")}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === "jp"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Local
          </button>
        </div>
      </header>

      {/* 国家选择器 */}
      <section className="w-full max-w-4xl mb-8 px-4">
        <CountrySelector
          selectedCountry={selectedCountry}
          onSelect={setSelectedCountry}
          countries={countries}
        />
      </section>

      {/* 地址结构展示、示例、设计参考 */}
      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <AddressFormStructure
            countryCode={selectedCountry}
            language={language}
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <AddressExample
              countryCode={selectedCountry}
              language={language}
            />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <DesignerReference countryCode={selectedCountry} />
          </div>
        </div>
      </main>

      {/* Footer 水印 */}
      <footer className="mt-12 text-gray-400 text-sm text-center">
        Designed by Yuxin Wang &mdash; yuxin.wang.sd@gmail.com &mdash; behance.net/yuxindesign
      </footer>
    </div>
  );
};

export default MainPage; 
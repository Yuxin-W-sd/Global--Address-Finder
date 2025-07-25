import React from "react";
import { addressFields } from "../data/addressFields";

const AddressFormStructure = ({ countryCode, language = "en", onLanguageChange }) => {
  const countryFields = addressFields[countryCode];
  
  if (!countryFields) {
    return (
      <div className="text-center text-gray-500 py-8">
        Address structure not available for this country.
      </div>
    );
  }

  return (
    <div className="space-y-4 bg-white border border-gray-200 rounded-sm p-6">
      {/* Header with Title and Language Switcher */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-normal text-black">
          {countryCode} Address Form
        </h2>
        
        {/* Language Switcher */}
        {getLocalLanguageName(countryCode) !== "EN" && (
          <div className="flex items-center">
            <div className="flex bg-gray-100 rounded-sm p-1">
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1 text-sm font-medium transition-all duration-200 rounded-sm ${
                  language === "en"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("local")}
                className={`px-3 py-1 text-sm font-medium transition-all duration-200 rounded-sm ${
                  language === "local"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {getLocalLanguageName(countryCode)}
              </button>
            </div>
          </div>
        )}
      </div>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {countryFields.fields.map((field, index) => {
            const isFullWidth = field.key === 'address1' || field.key === 'address2';
            const fieldLabel = language === "en" ? field.en : field.local;
            
            return (
              <div key={field.key} className={isFullWidth ? "md:col-span-2" : ""}>
                <label className="block text-sm font-normal text-black mb-1">
                  {fieldLabel}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                
                {getInputField(field, fieldLabel)}
                
                {field.key === 'address2' && (
                  <p className="mt-1 text-xs text-gray-400">(Optional)</p>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-8 font-medium text-base rounded-none hover:bg-gray-900 transition-all duration-200 focus:outline-none"
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
};

// 辅助函数：根据字段类型返回对应的输入组件
const getInputField = (field, label) => {
  const baseClasses = "w-full px-2 py-2 border border-gray-300 bg-white focus:outline-none focus:border-black text-sm text-black placeholder-gray-400 transition-all duration-200 rounded-none appearance-none pr-8";
  
  switch (field.key) {
    case 'firstName':
    case 'lastName':
      return (
        <input
          type="text"
          placeholder=""
          className={baseClasses}
        />
      );
      
    case 'address1':
      return (
        <input
          type="text"
          placeholder=""
          className={baseClasses}
        />
      );
      
    case 'address2':
      return (
        <input
          type="text"
          placeholder={label.includes('Optional') || label.toLowerCase().includes('optional') ? label : ""}
          className={baseClasses}
        />
      );
      
    case 'city':
      return (
        <input
          type="text"
          placeholder=""
          className={baseClasses}
        />
      );
      
    case 'state':
    case 'province':
      return (
        <div className="relative">
          <select className={baseClasses}>
            <option value="">{label}</option>
            <option value="ny">New York</option>
            <option value="ca">California</option>
            <option value="tx">Texas</option>
            <option value="fl">Florida</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      );
      
    case 'postalCode':
      return (
        <input
          type="text"
          placeholder=""
          className={baseClasses}
        />
      );
      
    case 'phone':
      return (
        <input
          type="tel"
          placeholder=""
          className={baseClasses}
        />
      );
      
    case 'neighborhood':
      return (
        <input
          type="text"
          placeholder=""
          className={baseClasses}
        />
      );
      
    case 'number':
      return (
        <input
          type="number"
          placeholder=""
          className={baseClasses}
        />
      );
      
    case 'complement':
      return (
        <input
          type="text"
          placeholder={label.includes('Optional') || label.toLowerCase().includes('optional') ? label : ""}
          className={baseClasses}
        />
      );
      
    case 'county':
      return (
        <div className="relative">
          <select className={baseClasses}>
            <option value="">County</option>
            <option value="manhattan">Manhattan</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="queens">Queens</option>
            <option value="bronx">Bronx</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      );
      
    default:
      return (
        <input
          type="text"
          placeholder=""
          className={baseClasses}
        />
      );
  }
};

// 根据国家代码获取本地语言名称
const getLocalLanguageName = (countryCode) => {
  const languageMap = {
    US: "EN",
    MX: "ES",
    CA: "EN",
    BR: "PT",
    GB: "EN",
    FR: "FR",
    IT: "IT",
    DE: "DE",
    ES: "ES",
    NL: "NL"
  };
  return languageMap[countryCode] || "EN";
};

export default AddressFormStructure; 
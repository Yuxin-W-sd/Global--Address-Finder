import React from "react";
import { designerReferences } from "../data/designerReferences";

const DesignerReference = ({ countryCode }) => {
  const ref = designerReferences[countryCode];
  if (!ref) {
    return (
      <div className="text-gray-400 text-center py-4">
        No reference available
      </div>
    );
  }
  return (
    <div className="space-y-4 bg-gray-50 border border-gray-200 rounded-sm p-6">
      <h3 className="text-xl font-normal text-black">Design References</h3>
      <div className="space-y-3">
        <div>
          <div className="font-semibold text-black mb-2 text-sm">Official Standards</div>
          <ul className="space-y-1">
            {ref.standards.map((item, idx) => (
              <li key={idx}>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-black underline hover:opacity-80 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-black mb-2 text-sm">E-commerce Platforms</div>
          <ul className="space-y-1">
            {ref.ecommerce.map((item, idx) => (
              <li key={idx}>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-black underline hover:opacity-80 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesignerReference; 
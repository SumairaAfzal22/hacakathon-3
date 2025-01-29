import React from 'react';

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12 mb-12 px-4">
      <div className="w-full sm:w-auto max-w-full rounded-md p-4">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <li className="flex flex-col items-start">
            <span className="font-bold text-black mb-4">Icons</span>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </li>
          <li className="flex flex-col items-start">
            <span className="font-bold text-black mb-4">Shoes</span>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </li>
          <li className="flex flex-col items-start">
            <span className="font-bold text-black mb-4">Clothing</span>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </li>
          <li className="flex flex-col items-start">
            <span className="font-bold text-black mb-4">Kids</span>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Infant & Toddlers Shoes</li>
              <li>Kid&#39;s Shoes</li>
              <li>Kid&#39;s Jordan Shoes</li>
              <li>Kid&#39;s Basketball Shoes</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;

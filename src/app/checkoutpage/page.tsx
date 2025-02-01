'use client'
import Image from "next/image"
import { useState } from "react";
import { FaTruck } from "react-icons/fa";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postalCode: "",
    locality: "",
    state: "",
    email: "",
    phoneNumber: "",
    pan: "",
    consent: false,
    saveAddress: false,
    preferredAddress: false,
    savePan: false
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="max-w-[900px] mx-auto bg-white p-6">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-[440px] px-4 border-gray-200">
          <h2 className="text-lg lg:text-[21px] font-medium mb-4">
            How would you like to get your order?
          </h2>
          <p className="text-sm text-[#757575] lg:text-[15px] font-normal mb-4">
            Customs regulations for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address.
            Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns.
            If your KYC does not match your shipping address, please click the link for more information.
            <a href="#" className="text-gray-400 text-[15px] underline">Learn More</a>.
          </p>

          {/* Delivery Option */}
          <div className="flex items-center w-full lg:w-[410px] h-[82px] border-[2px] rounded-[12px] px-[27px] mb-4 text-left gap-2">
            <FaTruck className="text-2xl " />
            <span >Deliver it</span>
          </div>

          {/* Form Fields */}
          <h3 className="text-lg font-semibold mb-2">Enter your name and address</h3>
          <form className="space-y-4">
            <input
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              placeholder="Address Line 1"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
            <p className="text-[11px] font-normal text-[#757575]">We do not ship to P.O. boxes</p>
            <input
              placeholder="Address Line 2"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
            <input
              placeholder="Address Line 3"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="text"
              name="addressLine3"
              value={formData.addressLine3}
              onChange={handleChange}
            />
            <div className="flex space-x-4">
              <input
                placeholder="Postal Code"
                className="w-1/2 p-2 border border-gray-300 rounded-[4px]"
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
              <input
                placeholder="Locality"
                className="w-1/2 p-2 border border-gray-300 rounded-[4px]"
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-4">
              <input
                placeholder="State/Territory"
                className="w-1/2 p-2 border border-gray-300 rounded-[4px]"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              <input
                placeholder="Country"
                disabled
                className="w-1/2 p-2 border border-gray-300 rounded-[4px] bg-gray-100"
                type="text"
                value="Pakistan"
              />
            </div>

            {/* Checkbox Options */}
            <div className="flex items-center space-x-2">
              <input
                id="save-address"
                type="checkbox"
                name="saveAddress"
                checked={formData.saveAddress}
                onChange={handleChange}
              />
              <label htmlFor="save-address" className="text-sm">Save this address to my profile</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="preferred-address"
                type="checkbox"
                name="preferredAddress"
                checked={formData.preferredAddress}
                onChange={handleChange}
              />
              <label htmlFor="preferred-address" className="text-sm">Make this my preferred Address</label>
            </div>

            <h3 className="text-lg font-semibold mb-2">What&#39;s your contact information?</h3>
            <input
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="text-[11px] font-normal text-[#757575]">A confirmation email will be sent after checkout.</p>
            <input
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <p className="text-[11px] font-normal text-[#757575]">A carrier might contact you to confirm delivery.</p>

            <h3 className="text-lg lg:text-[21px] font-semibold mb-2">What&#39;s your PAN?</h3>
            <input
              placeholder="PAN"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
            />
            <p className="text-[#8D8D8D] text-[12px] mb-2">Enter your PAN to enable Payment with UPI, Net Banking, or local card Methods.</p>
            <div className="flex items-center space-x-2">
              <input
                id="save-pan"
                type="checkbox"
                name="savePan"
                checked={formData.savePan}
                onChange={handleChange}
              />
              <label htmlFor="save-pan" className="text-[12px] text-[#8D8D8D]">Save PAN details to NikeProfile</label>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-baseline space-x-2">
              <input
                id="consent"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <label htmlFor="consent" className="text-[12px] text-[#8D8D8D]">
                I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy.
                eShopWorld is a trusted Nike partner.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F5F5F5] text-[15px] font-medium text-[#757575] py-2 px-4 rounded-[30px] hover:bg-gray-700 hover:text-white"
            >
              Continue
            </button>
          </form>
        </div>

        <div className="w-full md:w-[340px] px-4">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2 text-[15px] text-[#8D8D8D]">
          <p>Subtotal:</p>
          <p>₹ 20 890.00</p>
        </div>
        <div className="flex justify-between text-[15px] text-[#8D8D8D] mb-2">
          <p>Delivery Shipping:</p>
          <p>Free</p>
        </div>
        <div className="border-t border-gray-300 my-2"></div>
        <div className="flex justify-between text-[15px] mb-4">
          <p className="font-semibold">Total:</p>
          <p className="font-semibold">₹ 20 890.00</p>
        </div><div className="border-t border-gray-300 mb-4">
        </div>
        <p className="text-[9px] font-normal mb-4">(The total reflects the price of your order, including all duties and taxes)</p>
        <h1 className="text-[15px] font-bold mb-2">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">

            <Image src={"/product-4.png"} alt="Product Top"
              width={208}
              height={208}
              className="  object-cover rounded-md" />
            <div className="text-[13px] w-[100px]">
              <p className="font-normal">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
              <p className="text-sm text-[#8D8D8D]">Qty 2 </p>
              <p className="text-[#8D8D8D]">Size L</p>
              <p className="font-normal text-[#8D8D8D]">₹ 3 895.00</p>
            </div>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex items-center space-x-3">
          <Image src={"/p2.png"} alt="Product Top"
              width={208}
              height={208}
              className="  object-cover rounded-md" />
            <div>
              <p>Nike Air Force 1 PLT.AF.ORM</p>
              <p className="text-sm text-[#8D8D8D]">Qty 1</p>
              <p className="text-[#8D8D8D]"> Size L</p>
              <p className="font-semibold text-[#8D8D8D]">₹ 8 695.00</p>
            </div>
          </div>
        </div>
      </div>

    </div>

      </div>

     
  );
}

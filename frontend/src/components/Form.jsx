import { useState } from "react";
import axios from "axios";
import { resultState } from "../store/atoms/atoms";
import { useSetRecoilState } from "recoil";

const Form = () => {
  const [formData, setFormData] = useState({
    type: "",
    amount: "",
    oldbalanceOrg: "",
    newbalanceOrig: "",
    oldbalanceDest: "",
    newbalanceDest: "",
  });

  const [result, setResult] = useState("");
  const [fraudConfidence, setFraudConfidence] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const setResultData = useSetRecoilState(resultState);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      setResultData({
        result: response.data.result,
        fraudConfidence: response.data.fraud_confidence,
        recommendation: response.data.recommendation,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="mt-16 bg-white rounded-lg shadow-lg w-full max-w-md p-8 h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        UPI Fraud Detection System
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Transaction Type */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Select the Type:
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {/* <option value="">Select Type</option> */}
            <option value="1">CASH_IN</option>
            <option value="2">CASH_OUT</option>
            <option value="3">PAYMENT</option>
            <option value="4">TRANSFER</option>
            <option value="5">DEBIT</option>
          </select>
        </div>

        {/* Transaction Amount */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Transaction Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Sender's Old Balance */}
        <div>
          <label
            htmlFor="oldbalanceOrg"
            className="block text-sm font-medium text-gray-700"
          >
            Sender's Old Balance:
          </label>
          <input
            type="number"
            id="oldbalanceOrg"
            name="oldbalanceOrg"
            placeholder="Enter Sender's Old Balance"
            value={formData.oldbalanceOrg}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Sender's New Balance */}
        <div>
          <label
            htmlFor="newbalanceOrig"
            className="block text-sm font-medium text-gray-700"
          >
            Sender's New Balance:
          </label>
          <input
            type="number"
            id="newbalanceOrig"
            name="newbalanceOrig"
            placeholder="Enter Sender's New Balance"
            value={formData.newbalanceOrig}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Receiver's Old Balance */}
        <div>
          <label
            htmlFor="oldbalanceDest"
            className="block text-sm font-medium text-gray-700"
          >
            Receiver's Old Balance:
          </label>
          <input
            type="number"
            id="oldbalanceDest"
            name="oldbalanceDest"
            placeholder="Enter Receiver's Old Balance"
            value={formData.oldbalanceDest}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Receiver's New Balance */}
        <div>
          <label
            htmlFor="newbalanceDest"
            className="block text-sm font-medium text-gray-700"
          >
            Receiver's New Balance:
          </label>
          <input
            type="number"
            id="newbalanceDest"
            name="newbalanceDest"
            placeholder="Enter Receiver's New Balance"
            value={formData.newbalanceDest}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Predict Button */}
        <div className="flex flex-row justify-center items-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-40 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Predict
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

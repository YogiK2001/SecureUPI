import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    transactionType: "",
    recieverOldBal: "",
    recieverNewBal: "",
    sendersOldBal: "",
    senderNewBal: "",
    transactionAmount: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Prediction: ${data.prediction}`);
      } else {
        alert("Failed to get a response from the backend.");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Error connecting to the backend. Please try again.");
    }
  };

  return (
    <div className="mt-16 bg-white rounded-lg shadow-lg w-full max-w-md p-8 h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        UPI Fraud Detection System
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Transaction Hour */}
        <div>
          <label
            htmlFor="transaction-hour"
            className="block text-sm font-medium text-gray-700"
          >
            Select the Type:
          </label>
          <select
            id="transactionType"
            name="transactionType"
            value={formData.transactionType}
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

        {/* Transaction Day */}

        {/* Senders */}
        <div>
          <label
            htmlFor="sendersOldBal"
            className="block text-sm font-medium text-gray-700"
          >
            Senders Old Balance:
          </label>
          <input
            type="text"
            id="sendersOldBal"
            name="sendersOldBal"
            placeholder="Enter month"
            value={formData.sendersOldBal}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Transaction Year */}
        <div>
          <label
            htmlFor="senderNewBal"
            className="block text-sm font-medium text-gray-700"
          >
            Sender New Balance:
          </label>
          <input
            type="text"
            id="senderNewBal"
            name="senderNewBal"
            placeholder="Enter year"
            value={formData.senderNewBal}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="recieverOldBal"
            className="block text-sm font-medium text-gray-700"
          >
            Recievers Old Balance
          </label>
          <input
            type="text"
            id="recieverOldBal"
            name="recieverOldBal"
            placeholder="Enter day"
            value={formData.recieverOldBal}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="recieverNewBal"
            className="block text-sm font-medium text-gray-700"
          >
            Recievers Old Balance
          </label>
          <input
            type="text"
            id="recieverNewBal"
            name="recieverNewBal"
            placeholder="Enter day"
            value={formData.recieverOldBal}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Transaction Amount */}
        <div>
          <label
            htmlFor="transaction-amount"
            className="block text-sm font-medium text-gray-700"
          >
            Transaction Amount:
          </label>
          <input
            type="text"
            id="transaction-amount"
            name="transactionAmount"
            placeholder="Enter amount"
            value={formData.transactionAmount}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* UPI Number */}

        {/* Buttons */}
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

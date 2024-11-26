/* eslint-disable react/prop-types */
import { useRecoilValue } from "recoil";
import { resultState } from "../store/atoms/atoms.js";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Result = () => {
  const { result, fraudConfidence, recommendation } =
    useRecoilValue(resultState);

  const fraudConfidenceNum = parseFloat(fraudConfidence);
  const fraudProbability = fraudConfidenceNum * 100;
  const notFraudProbability = (1 - fraudConfidenceNum) * 100;

  const chartData = {
    labels: ["Fraudulent", "Not Fraudulent"],
    datasets: [
      {
        label: "Confidence Level (%)",
        data: [fraudProbability, notFraudProbability],
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col h-50 w-50 justify-center items-center gap-5 text-4xl text-cyan-700 font-bold bg-transparent">
      <div>
        <h1>Analysis of the Transactions</h1>
      </div>
      <div className="flex flex-col justify-center rounded-lg p-10 items-center gap-5 bg-white">
        <h1
          className={`text-4xl ${
            result === 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {result === 0
            ? "This is not a fraudulent transaction."
            : "This is a fraudulent transaction."}
        </h1>
        <p className="text-slate-950">
          Confidence Level: {(fraudConfidence * 100).toFixed(5)}%
        </p>
        <p className="text-slate-950">{recommendation}</p>
        <div className="w-full max-w-md mt-6">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;

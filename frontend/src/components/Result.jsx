import { useRecoilValue } from "recoil";
import { resultState } from "../store/atoms/atoms.js";

const Result = () => {
  const { result, fraudConfidence, recommendation } =
    useRecoilValue(resultState);
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5 text-4xl text-cyan-700 font-bold bg-transparent">
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
        <p className="text-slate-950">Confidence Level: {fraudConfidence}</p>
        <p className="text-slate-950">{recommendation}</p>
      </div>
    </div>
  );
};

export default Result;

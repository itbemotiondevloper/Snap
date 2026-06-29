import { useState } from "react";

export default function TaxCalculator() {
  const [income, setIncome] = useState(800000);
  const [investment80C, setInvestment80C] = useState(150000);
  const [insurance80D, setInsurance80D] = useState(25000);

  const totalDeduction = investment80C + insurance80D;
  const taxSaved = totalDeduction * 0.24; // example 24% tax slab

  return (
  <div className="mx-auto mt-6 w-full max-w-[220px] rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-700 dark:bg-gray-900">
  <h3 className="text-xs font-bold text-gray-900 dark:text-white">
    Tax Savings Calculator
  </h3>

  <div className="mt-3 space-y-2">
    <div>
      <label className="text-[10px] text-gray-600 dark:text-gray-300">
        Annual Income
      </label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        className="mt-1 h-9 w-full rounded border border-gray-300 bg-white px-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
    </div>

    <div>
      <label className="text-[10px] text-gray-600 dark:text-gray-300">
        80C Investment
      </label>
      <input
        type="number"
        value={investment80C}
        onChange={(e) => setInvestment80C(Number(e.target.value))}
        className="mt-1 h-9 w-full rounded border border-gray-300 bg-white px-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
    </div>

    <div>
      <label className="text-[10px] text-gray-600 dark:text-gray-300">
        80D Insurance
      </label>
      <input
        type="number"
        value={insurance80D}
        onChange={(e) => setInsurance80D(Number(e.target.value))}
        className="mt-1 h-9 w-full rounded border border-gray-300 bg-white px-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />
    </div>
  </div>

  <div className="mt-3 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
    <p className="text-[9px] text-gray-600 dark:text-gray-300">
      Estimated Tax Saved
    </p>
    <p className="text-base font-bold text-green-600">
      ₹ {taxSaved.toLocaleString("en-IN")}
    </p>
  </div>
</div>
  );
}
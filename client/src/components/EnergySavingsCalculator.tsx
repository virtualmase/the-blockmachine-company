import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, TrendingDown } from "lucide-react";

export default function EnergySavingsCalculator() {
  const [squareFeet, setSquareFeet] = useState(2000);
  const [currentSEER, setCurrentSEER] = useState(13);
  const [electricityRate, setElectricityRate] = useState(0.15);

  // Calculate annual energy consumption (simplified)
  const annualHours = 2000; // Average cooling hours per year
  const currentConsumption = (squareFeet * annualHours) / currentSEER;
  const newConsumption = (squareFeet * annualHours) / 24; // SEER2 24 system
  const energySavings = currentConsumption - newConsumption;
  const costSavings = energySavings * electricityRate;
  const paybackYears = (squareFeet * 50) / costSavings; // Estimated system cost

  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-8 border border-blue-200">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="h-6 w-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-slate-900">Energy Savings Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Square Footage */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Home Size (sq ft)
          </label>
          <input
            type="range"
            min="1000"
            max="5000"
            step="100"
            value={squareFeet}
            onChange={(e) => setSquareFeet(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-2xl font-bold text-blue-600 mt-2">{squareFeet.toLocaleString()} sq ft</div>
        </div>

        {/* Current SEER Rating */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Current SEER Rating
          </label>
          <input
            type="range"
            min="10"
            max="20"
            step="1"
            value={currentSEER}
            onChange={(e) => setCurrentSEER(Number(e.target.value))}
            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-2xl font-bold text-blue-600 mt-2">SEER {currentSEER}</div>
        </div>

        {/* Electricity Rate */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Electricity Rate ($/kWh)
          </label>
          <input
            type="number"
            min="0.10"
            max="0.30"
            step="0.01"
            value={electricityRate}
            onChange={(e) => setElectricityRate(Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-lg font-bold text-blue-600"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <div className="text-sm text-slate-600 mb-2">Annual Energy Savings</div>
          <div className="text-3xl font-bold text-green-600">{Math.round(energySavings).toLocaleString()} kWh</div>
          <div className="text-xs text-slate-500 mt-2">vs current system</div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <div className="text-sm text-slate-600 mb-2">Annual Cost Savings</div>
          <div className="text-3xl font-bold text-green-600">${Math.round(costSavings).toLocaleString()}</div>
          <div className="text-xs text-slate-500 mt-2">per year</div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <div className="text-sm text-slate-600 mb-2">Payback Period</div>
          <div className="text-3xl font-bold text-blue-600">{paybackYears.toFixed(1)} yrs</div>
          <div className="text-xs text-slate-500 mt-2">estimated</div>
        </div>
      </div>

      {/* CO2 Reduction */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-start gap-3">
          <TrendingDown className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <div className="font-semibold text-slate-900 mb-1">Environmental Impact</div>
            <p className="text-slate-700">
              Upgrading to a SEER2 24 system would reduce your annual CO2 emissions by approximately{" "}
              <span className="font-bold text-green-600">
                {(energySavings * 0.92 / 1000).toFixed(1)} metric tons
              </span>
              , equivalent to planting{" "}
              <span className="font-bold text-green-600">
                {Math.round(energySavings * 0.92 / 20)} trees
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-600 mb-4">
          Ready to start saving? Get a free quote from our HVAC experts.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
          Get Free Quote
        </Button>
      </div>
    </div>
  );
}

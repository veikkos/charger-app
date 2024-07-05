import React, { useState } from 'react';
import { calculateChargingSpeed } from './calculator';

const ChargingSpeedCalculator: React.FC = () => {
  const [batteryCapacity, setBatteryCapacity] = useState<number>(81.1);
  const [startPercentage, setStartPercentage] = useState<number>(23);
  const [endPercentage, setEndPercentage] = useState<number>(80);
  const [chargingHours, setChargingHours] = useState<number>(6);
  const [chargingMinutes, setChargingMinutes] = useState<number>(20);
  const [averageChargingSpeed, setAverageChargingSpeed] = useState<number | null>(null);

  const calculate = () => {
    setAverageChargingSpeed(calculateChargingSpeed(
      batteryCapacity,
      startPercentage,
      endPercentage,
      chargingHours,
      chargingMinutes
      )
    );
  };

  return (
    <div>
      <h1>Charging Speed Calculator</h1>
      <div>
        <label>
          Battery Capacity (kWh):
          <input type="number" value={batteryCapacity} onChange={e => setBatteryCapacity(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Start Percentage (%):
          <input type="number" value={startPercentage} onChange={e => setStartPercentage(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          End Percentage (%):
          <input type="number" value={endPercentage} onChange={e => setEndPercentage(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Charging Time (Hours):
          <input type="number" value={chargingHours} onChange={e => setChargingHours(parseFloat(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Charging Time (Minutes):
          <input type="number" value={chargingMinutes} onChange={e => setChargingMinutes(parseFloat(e.target.value))} />
        </label>
      </div>
      <button onClick={calculate}>Calculate</button>
      {averageChargingSpeed !== null && (
        <div>
          <h2>Average Charging Speed: {averageChargingSpeed.toFixed(2)} kW</h2>
        </div>
      )}
    </div>
  );
};

export default ChargingSpeedCalculator;

export function calculateChargingSpeed(
  batteryCapacity: number,
  startPercentage: number,
  endPercentage: number,
  chargingHours: number,
  chargingMinutes: number
): number {
  // Calculate the energy added to the battery
  const energyAdded = batteryCapacity * (endPercentage - startPercentage) / 100;

  // Convert charging time to hours
  const chargingTime = chargingHours + (chargingMinutes / 60);

  // Calculate the average charging speed
  const averageChargingSpeed = energyAdded / chargingTime;

  return averageChargingSpeed;
}


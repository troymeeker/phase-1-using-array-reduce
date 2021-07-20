const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatt = batteryBatches.reduce((total, batt) => {
    return total + batt;
  }, 0);
  console.log(totalBatt);
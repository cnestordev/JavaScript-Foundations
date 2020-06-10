function mortgageCalculator(p, i, n, creditScore) {
  let principal = p || 200000;
  let interestRate = i || 0.05;
  let years = n || 30;
  let name = 'Nestor';
  let monthlyInterestRate = interestRate / 12; // i

  if (creditScore > 740) {
    monthlyInterestRate = monthlyInterestRate * 0.95;
  } else if (creditScore < 660) {
    monthlyInterestRate = monthlyInterestRate * 1.05;
  }

  let periods = years * 12; //n
  let n1 = Math.pow(1 + monthlyInterestRate, periods);
  //   let n2 = n1 * monthlyInterestRate;
  let numerator = monthlyInterestRate * n1;
  let denominator = n1 - 1;
  let monthlyRate = (principal * (numerator / denominator)).toFixed(2);
  return `${name}, your monthly rate is $${monthlyRate}`;
}

function variableInterestRate(p, i, n) {
  let principal = p || 200000;
  let interestRate = i || 0.05;
  let startingPoint = (interestRate * 100 - 2) / 100;
  let years = n || 30;
  let name = 'Nestor';
  for (var i = 0; i < 10; i++) {
    interestRate = startingPoint;
    let monthlyInterestRate = interestRate / 12; // i
    let periods = years * 12; //n
    let n1 = Math.pow(1 + monthlyInterestRate, periods);
    //   let n2 = n1 * monthlyInterestRate;
    let numerator = monthlyInterestRate * n1;
    let denominator = n1 - 1;
    let monthlyRate = (principal * (numerator / denominator)).toFixed(2);
    console.log(`${name}, your monthly rate of ${startingPoint.toFixed(3)} $${Math.round(monthlyRate)}`);
    startingPoint += 0.005;
  }
}

function variableInterestRateArr(p, arrI, n) {
  let principal = p || 200000;
  let years = n || 30;
  let name = 'Nestor';
  for (var i = 0; i < arrI.length; i++) {
    let interestRate = arrI[i];
    let monthlyInterestRate = interestRate / 12; // i
    let periods = years * 12; //n
    let n1 = Math.pow(1 + monthlyInterestRate, periods);
    //   let n2 = n1 * monthlyInterestRate;
    let numerator = monthlyInterestRate * n1;
    let denominator = n1 - 1;
    let monthlyRate = (principal * (numerator / denominator)).toFixed(2);
    console.log(`${name}, your monthly rate is $${Math.round(monthlyRate)}`);
  }
}

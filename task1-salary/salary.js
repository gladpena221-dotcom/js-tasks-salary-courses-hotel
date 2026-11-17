const employees = [
  { name: "Олег", hours: 160, rate: 200 },
  { name: "Марія", hours: 145, rate: 250 },
  { name: "Іван", hours: 180, rate: 180 },
  { name: "Анна", hours: 170, rate: 220 },
];

const BONUS_HOURS = 160;
const BONUS_RATE = 0.1;

function calculateSalary(hours, rate) {
  const baseSalary = hours * rate;
  if (hours > BONUS_HOURS) {
    return baseSalary * (1 + BONUS_RATE);
  }
  return baseSalary;
}

function calculatePayroll(employees) {
  let total = 0;
  for (const employee of employees) {
    total += calculateSalary(employee.hours, employee.rate);
  }
  return total;
}

for (const employee of employees) {
  const salary = calculateSalary(employee.hours, employee.rate);
  const bonusNote = employee.hours > BONUS_HOURS ? " (з бонусом)" : "";
  console.log(`${employee.name}: ${salary} грн${bonusNote}`);
}

console.log(`Загальні витрати: ${calculatePayroll(employees)} грн`);

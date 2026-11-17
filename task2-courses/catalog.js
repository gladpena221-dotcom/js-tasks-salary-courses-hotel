const courses = [
  { id: 1, title: "Python Basics", category: "Programming", price: 1200, students: 150 },
  { id: 2, title: "UI/UX Design", category: "Design", price: 1800, students: 90 },
  { id: 3, title: "JavaScript", category: "Programming", price: 1500, students: 200 },
  { id: 4, title: "Photoshop", category: "Design", price: 900, students: 110 },
  { id: 5, title: "Data Science", category: "Programming", price: 2500, students: 75 },
];

const programmingCourses = courses.filter((course) => course.category === "Programming");

const courseLabels = courses.map((course) => `${course.title}: ${course.price} грн`);

const courseById = courses.find((course) => course.id === 4);

const coursesByStudents = [...courses].sort((a, b) => b.students - a.students);

function averagePrice(courseList) {
  let sum = 0;
  for (const course of courseList) {
    sum += course.price;
  }
  return courseList.length === 0 ? 0 : sum / courseList.length;
}

console.log("Курси категорії Programming:");
console.log(programmingCourses);

console.log("\nНазви курсів із ціною:");
console.log(courseLabels);

console.log("\nКурс з id = 4:");
console.log(courseById);

console.log("\nКурси за кількістю студентів (спадання):");
console.log(coursesByStudents);

console.log("\nПочатковий масив без змін:");
console.log(courses);

console.log(`\nСередня ціна: ${averagePrice(courses)} грн`);

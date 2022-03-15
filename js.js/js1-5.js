let arr = ["Иван", "Иванов", "отдел разработки", "программист"];
let [name, surname, department, position = "junior"] = arr;

console.log(position);
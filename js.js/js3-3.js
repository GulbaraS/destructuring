func( ['Иван', 'Иванов', 'отдел разработки'] );

function func([name, surname, department, position = "junior"]) {
    console.log(position);
}
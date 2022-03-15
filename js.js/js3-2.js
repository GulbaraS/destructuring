func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([name, surname, ...info]) {
    console.log(info);
}
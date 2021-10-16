
const fs = require('fs');
const app = require('express')();

var json2xlsx = require('json2xlsx');
const filename = '../output/sample.xlsx';



app.listen(5050, () => {
    console.log("app is running on port 5050");
    writter();
})


var writter = function () {
    const allUsers = require('../data/sample.json');
    var xls = json2xlsx.write(filename, 'user', allUsers)

    console.log('completed!')
}

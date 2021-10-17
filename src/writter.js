const { Parser } = require('json2csv');

const moment = require('moment');
var today = moment();

const fs = require('fs');
const app = require('express')();

const oputputSchema =[
    { title: "id", path: "id"},
    { title: "fund", path: "fund", props: [
            { title: "fund id", path: "fund_id"},
            { title: "transaction type", path: "txn_type"},
            { title: "num. of unit", path: "unit"}
        ]},
    {title: "First name", path: "first Name"},
    {title: "Last name", path: "lastName"}

]


const filename = '../output/sample' + today.format('.YYYYMMDD') + '.csv';



const dataJson = require('../data/sample-nest.json');

var writter = function () {
    var json2xlsx = require('json2xlsx');
    var xls = json2xlsx.write(filename, 'user', dataJson, ['id', 'fund'])
    // var write(filename, 'user', dataJson, ['id', 'fund'])

    console.log('completed!')
}

var convert2excel = function () {
    var json2excel = require('json5-to-table')
    generateExcel(dataJson, oputputSchema, {writeTo: filename})
    console.log('completed!')
}


var convert2csv = function () {
    const json2csvPraser = new Parser();
    const dataOoutput = json2csvPraser.parse(dataJson);



    console.log(dataOoutput);
}

convert2csv()

// writter()

// convert2excel()


import generateExcel from 'json5-to-table'

const moment = require('moment')
var today = moment()

const fs = require('fs');
const app = require('express')();

const oputputSchema =[
    { title: "id", path: "id"},
    { title: "fund", path: "fund", props: [
            { title: "fund id", path: "fund_id"},
            { title: "transaction type", path: "txn_type"},
            { title: "num. of unit", path: "units"}
        ]}

]

var json2xlsx = require('json2xlsx');
const filename = '../output/sample' + today.format('.YYYYMMDD') + '.xlsx';



const allUsers = require('../data/sample-nest.json');

var writter = function () {
    var xls = json2xlsx.write(filename, 'user', allUsers, ['id', 'fund'])

    console.log('completed!')
}

var convert2excel = function () {
    var json2excel = require('json5-to-table')

    generateExcel(allUsers, oputputSchema, {writeTo: filename})
    console.log('completed!')
}
/*
writter()
*/

convert2excel()


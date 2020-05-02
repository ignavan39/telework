const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const csv = require('csv-parser');
const { runInThisContext } = require('vm');
const results = [];
const resultsConvert = [];
class Teacher {
    constructor(
        area,
        school,
        name,
        platform,
        platformStable,
        ready,
        time,
        timeOnTelephone
    ) {
        this.area = area;
        this.school = school;
        this.name = name;
        this.platform = platform;
        this.platformStable = platformStable;
        this.ready = ready;
        this.time = time;
        this.timeOnTelephone = timeOnTelephone;
    }
    get area() {
        return this.area;
    }
    get school() {
        return this.school;
    }
    get name() {
        return this.name;
    }
    get platform() {
        this.platform;
    }
    get platformStable() {
        this.platformStable;
    }
    get ready() {
        this.ready;
    }
    get time() {
        this.time;
    }
    get timeOnTelephone() {
        this.timeOnTelephone;
    }
}
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
fs
    .createReadStream('table.csv')
    .pipe(csv())
    .on('data', data => results.push(data))
    .on('end', () => {
        console.log(results);
    });

/*for (item in results) {
    resultsConvert.push(
        new Teacher(
            item.get('Район '),
            item.get('Название школы '),
            item.get('Фамилия Имя Отчество '),
            item.get('Какую платформу для ДО вы используете чаще всего'),
            item.get('Какая платформа работает стабильнее других ?'),
            item.get(
                'Оцените степень своей готовности на начало работы с ДО (06.04) '
            ),
            item.get(
                'Время на подготовку , проведение урока , проверку дз, ( сколько работаете в день) на ДО'
            ),
            item.get(
                'Время проведенное у телефона( планшета) / компьютера ( ноутбука) связанное с работой '
            )
        )
    );
//}*/
app.get('/', (req, res, next) => {
    res.send(results);
});
app.listen(PORT, () => {
    console.log(`Server startred on port ${PORT}`);
});
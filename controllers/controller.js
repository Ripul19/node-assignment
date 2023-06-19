const departmentModel = require('../models/department');
const valuesModel = require('../models/values');
const finalDataModel = require('../models/finalData');

const data =[];

exports.getAllDepartments = (req, res, next) => {
    departmentModel.findAll()
    .then(departments => {
        res.render('home', {departments: departments, pageTitle: 'Departments'});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getDepartment = (req, res, next) => {
    const deptId = req.params.departmentId;
    departmentModel.findByPk(deptId)
    .then(department => {
        res.render('department', {pageTitle: department.name, department: department});
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postDepartment = (req, res, next) => {
    const deptId = req.params.departmentId;
    const roll = req.body.roll;
    const radioOption = req.body.radioOption;
    const brandSD = req.body.brandSD;
    const date = req.body.date;
    const dayEngineer = req.body.dayEngineer;
    const inCharge = req.body.inCharge;

    const formData = {
        deptId: deptId,
        roll: roll,
        radioOption: radioOption,
        brandSD: brandSD,
        date: date,
        dayEngineer: dayEngineer,
        inCharge: inCharge
    };
    data[0]=formData;
    res.redirect('/departmentpage2')
};

exports.getDepartmentPage2 = (req, res, next) => {
    const deptId = data[0].deptId;
    departmentModel.findByPk(deptId)
    .then(department => {
        valuesModel.findAll({
            where: { deptName: department.name },
    })
        .then(values => {
            res.render('finalPage', {pageTitle: department.name, department: department, values: values});
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postSave = (req, res, next) => {
    const savePromises = [];
    let combinedArray= [];

    const forms = [req.body];

    forms.forEach((form) => {
        const item = Array.isArray(form.item) ? form.item.join(', ') : String(form.item);
        const unit = Array.isArray(form.unit) ? form.unit.join(', ') : String(form.unit);
        const code = Array.isArray(form.code) ? form.code.join(', ') : String(form.code);
        const radioOption2 = Array.isArray(form.radioOption) ? form.radioOption.join(', ') : String(form.radioOption);
        const shiftTime = Array.isArray(form.shiftTime) ? form.shiftTime.join(', ') : String(form.shiftTime);

        const formData = {
            item: item,
            unit: unit,
            code: code,
            radioOption2: radioOption2,
            shiftTime: shiftTime
        };

        combinedArray = { ...data[0], ...formData };
        req.session.arrayData = combinedArray;
    });

    finalDataModel.create(combinedArray)
    .then(() => {
        combinedArray= [];
        res.redirect('/savedData');
    })
    .catch(err => {
        console.log(err);
    }) 
};

exports.getData = (req, res, next) => {
    const data = req.session.arrayData || [];
    res.status(200).json({ data });
};

exports.getAllData = (req, res, next) => {
    finalDataModel.findAll()
    .then(allData => {
        res.status(200).json( {allData});
    })
    .catch(err => {
        console.log(err);
    })
};
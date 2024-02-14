const employee = { 
    name: 'lo',
    streetAddress :'streetOne'
}
function updateEmployeeWithKeyAndValue(Employee, key, value) {
return {...Employee,[key]:value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
        obj = employee
    obj[key]=value;
    return obj
}
function  deleteFromEmployeeByKey(newEmployee, key) {
    newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function   destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
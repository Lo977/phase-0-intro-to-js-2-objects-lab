
const employee = { 
    name: 'lo',
    streetAddress :'streetOne'
}
    
function updateEmployeeWithKeyAndValue(newEmployee, key, value) {
     newEmployee = {...employee}
     newEmployee[key] = value
     return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value) {

    newEmployee = employee
    newEmployee[key] = value
    return newEmployee;
}
function deleteFromEmployeeByKey(newEmployee, key) {
    newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee

}
function  destructivelyDeleteFromEmployeeByKey(newEmployee, key) {
    newEmployee = employee
    delete newEmployee[key]
    return newEmployee;
}
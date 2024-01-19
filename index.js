// Write your solution in this file!
const employee = {
    name: "Sushi",
    address: "123 A Ave"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeObj = {...employee}
    newEmployeeObj[key] = value
    return newEmployeeObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
   const newEmployee = {...employee}
   delete newEmployee[key]
   return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
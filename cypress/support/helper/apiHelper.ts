// const statusCode = {
//     'POST': 200,
//     'GET': 200,
//     'DELET': 204
// };
const baseUrl = Cypress.config().baseUrl
// export const URLS={
//     users:`${baseUrl}/api/users`
//       // users:`https://conduit.productionready.io/api/users`
// }
export const addJob = (title: string) => {
    return cy.request({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/admin/job-titles`,
        body: {
            title: title,
            description: "",
            specification: null,
            note: ""
        }
    })
}
export const addLocation = (name: string, countryCode: string) => {
    return cy.request({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/admin/locations`,
        body: {
            name: name ,
            countryCode: countryCode,
            province: "",
            city: "",
            address: "",
            zipCode: "",
            phone: "",
            fax: "",
            note: ""
        }
    })
}
export const addEmployee = (firstName: string, lastName: string) => {
    return cy.request({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/pim/employees`,
        body: {
            firstName: firstName,
            middleName: "",
            lastName: lastName,
            empPicture: null,
            employeeId: "0258998"
        }
    })
}
export const addEmployeeLoginInfo = (username: string, password: string, empNumber: string) => {
    return cy.request({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/admin/users`,
        body: {
            username: username ,
            password: password,
            status: true,
            userRoleId: 2,
            empNumber: empNumber
        }
    })
}

export const addEmployeeJobAndLocationInfo=(empNumber:string,jobId:string,locationId:string)=>{
    cy.request({
        method: 'PUT',
        url: `${baseUrl}/web/index.php/api/v2/pim/employees/${empNumber}/job-details`,
        body: {
            joinedDate: null,
            jobTitleId: jobId,
            locationId: locationId
        }
    })
}
export const addEmployeeSalary=(salaryAmount:string,empNumber:string)=>{
    cy.request({
        method: 'POST',
        url: `${baseUrl}/web/index.php/api/v2/pim/employees/${empNumber}/salary-components`,
        body: {
            salaryComponent: "salary comp"+Math.random()*1000,
            salaryAmount: salaryAmount,
            currencyId: "AFN",
            comment: null,
            addDirectDeposit: false
        }
    })
   

}
export const deleteEmployee=(empNumber:string)=>{
    cy.request({
        method: 'DELETE',
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees`,
        body: {
            "ids": [
                empNumber
            ]
        }
    })
}
export const deleteLocation=(locationId:string)=>{
    cy.request({
        method: 'DELETE',
        url: `${baseUrl}/web/index.php/api/v2/admin/locations`,
        body: {
            "ids": [
                locationId
            ]
        }
    })
}
export const deleteJob=(jobId:string)=>{
    cy.request({
        method: 'DELETE',
        url: `${baseUrl}/web/index.php/api/v2/admin/job-titles`,
        body: {
            "ids": [
                jobId
            ]
        }
    })
}
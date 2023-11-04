import { addJob, addLocation, addEmployee, addEmployeeLoginInfo, addEmployeeJobAndLocationInfo, addEmployeeSalary, deleteEmployee, deleteJob, deleteLocation } from "../support/helper/apiHelper";
let jobId: string;
let empNumber: string;
let number = [];
let locationId: string;
let location = "Ammann"
let job = "QA Automanual"
describe("", () => {
    beforeEach(function () {
        cy.visit("/web/index.php/auth/login");
        cy.fixture('employee').as('EmpInfo')
        cy.login("Admin", "admin123").then(() => {
            addJob(job).then((response) => {
                jobId = response.body.data.id
                addLocation(location, "JO").then((response) => {
                    locationId = response.body.data.id
                    for (let i = 0; i < 3; i++) {
                        cy.get('@EmpInfo').then((infoData: any) => {
                            addEmployee(infoData.employees[i].firstName, infoData.employees[i].lastName)
                                .then(async (response) => {
                                    empNumber = await response.body.data.empNumber
                                    number.push(response.body.data.empNumber)
                                    console.log(empNumber)
                                    addEmployeeLoginInfo(infoData.employees[i].username, infoData.employees[i].password, empNumber)
                                        .then(() => {
                                            addEmployeeJobAndLocationInfo(empNumber, jobId, locationId)
                                            addEmployeeSalary(infoData.employees[i].salary, empNumber)
                                        });
                                })
                        })
                    }

                })

            })
        })
    })
    it("", () => {


        cy.visit("/web/index.php/pim/viewEmployeeList")
        cy.get('.oxd-topbar-body-nav > ul').contains("Report").click({ force: true })
        cy.get('.orangehrm-header-container > .oxd-button').click({ force: true })
        cy.get('.oxd-loading-spinner-container').should("exist").then(() => {
            cy.get('.oxd-loading-spinner-container').should("not.exist").then(() => {
                cy.get('.oxd-input').last().type("test" + Math.random() * 10)
                cy.get('.oxd-select-text').first().click({ force: true })
                cy.get('.oxd-select-dropdown').contains('Job Title').click({ force: true })
                cy.get(' .oxd-icon-button').eq(2).click({ force: true })
                cy.get('.oxd-select-text').first().click({ force: true })
                cy.get('.oxd-select-dropdown').contains('Location').click({ force: true })
                cy.get(' .oxd-icon-button').eq(2).click({ force: true })




                cy.get('.oxd-select-text').eq(2).click({ force: true })
                cy.get('.oxd-select-dropdown').contains(job).click({ force: true })
                cy.get('.oxd-select-text').eq(3).click({ force: true })
                cy.get('.oxd-select-dropdown').contains(location).click({ force: true })

                cy.get('.oxd-select-text').eq(4).click({ force: true })
                cy.get('.oxd-select-dropdown').contains("Salary").click({ force: true })
                cy.get('.oxd-select-text').eq(5).click({ force: true })
                cy.get('.oxd-select-dropdown').contains("Amount").click({ force: true })
                cy.get('.oxd-icon-button > .oxd-icon').eq(5).click({ force: true })


                cy.get('.oxd-select-text').eq(4).click({ force: true })
                cy.get('.oxd-select-dropdown').contains("Personal").click({ force: true })
                cy.get('.oxd-select-text').eq(5).click({ force: true })
                cy.get('.oxd-select-dropdown').contains("First Name").click({ force: true })
                cy.get('.oxd-icon-button > .oxd-icon').eq(5).click({ force: true })

                cy.get('.oxd-select-text').eq(4).click({ force: true })
                cy.get('.oxd-select-dropdown').contains("Job").click({ force: true })
                cy.get('.oxd-select-text').eq(5).click({ force: true })
                cy.get('.oxd-select-dropdown').contains("Job Title").click({ force: true })
                cy.get('.oxd-icon-button > .oxd-icon').eq(5).click({ force: true })

                cy.get('.oxd-switch-input').first().click({ force: true })
                cy.get('.oxd-switch-input').eq(1).click({ force: true })
                cy.get('.oxd-switch-input').last().click({ force: true })

                cy.get('.oxd-button--secondary').click({ force: true })
                cy.get(".rgRow").should("have.length", 3)
                cy.get(".rgCell", { timeout: 60000 }).eq(0).contains("Israa")
                cy.get(".rgCell", { timeout: 60000 }).eq(1).contains(job)
                cy.get(".rgCell", { timeout: 60000 }).eq(2).contains(5000)
                cy.get(".rgCell", { timeout: 90000 }).eq(3).contains("Marah")
                cy.get(".rgCell", { timeout: 90000 }).eq(6).contains("Maram")


            })


        })

    })


})
after(() => {
    number.forEach((num) => {
        deleteEmployee(num)
    })
    deleteJob(jobId)
    deleteLocation(locationId)
})




import LoginValidation from "../support/pageobjects/loginValidation";
const loginObjValidation: LoginValidation = new LoginValidation();
// const baseUrl = Cypress.config().baseUrl
let leaveId: number

export const URLs = {
    users: `https://opensource-demo.orangehrmlive.com/api/users`,
    leaveRequests: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/leave-requests`,
    // approvereject: `${baseUrl}/web/index.php/api/v2/leave/employees/leave-requests/${leaveId}`
}


export function requestLeave(comment: string, duration:any, fromDate: string, leaveTypeId: number, partialOption: string, toDate: string){
    cy.request({
        method: 'POST',
        url: URLs.leaveRequests,
        body: {
            comment: comment,
            duration: duration,
            fromDate: fromDate,
            leaveTypeId: leaveTypeId,
            partialOption: partialOption,
            toDate: toDate,
        }
      }).then((response) => {
        // console.log(response)
        leaveId = response.body.data.id;
      });
}



export function approveReject(){
    console.log(leaveId)
  cy.request({
      method: 'PUT',
      url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/employees/leave-requests/${leaveId}`,
      body: {
        action: "APPROVE"
      }
    })
}

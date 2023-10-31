export const  addEmployee=(firstName :string,middleName:string,lastName:string,id:string,username:string,password:string)=>{
     cy.request({
        method: 'POST',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        body: {
            firstName: firstName,
            middleName: middleName,
            lastName:lastName,
            empPicture: null,
            employeeId: id
        }
    }).then((response)=>{
       const empNumber = response.body.data.empNumber
        cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
            body: {
                username: username,
                password: password,
                status: true,
                userRoleId: 2,
                empNumber: empNumber
            }
        }).then((response) => {
            expect(response).property('status').to.eq(200);
        });
    })
   
 
}


const baseUrl = Cypress.config().baseUrl
export const URLS={
users:`${baseUrl}/api/users`
  // users:`https://conduit.productionready.io/api/users`
}
export default class addUser{
    static conduitNewUserUsingAPI(username:string,email:string,password:string){
        cy.api({
            method:'POST',
            url:URLS.users,
            body : 
            {
              user:{
                username:username,
                email:email,
                password:password
              }  
            }
    
          })
    }
    static conduitNewUserUsingAPII(payload){
    return  cy.api({
          method:'POST',
          url:URLS.users,
          body : payload
          
  
        })
  }
}
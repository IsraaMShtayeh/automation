import userInit from "../init/userinit"
import { ICreateEmployeeResponse } from "../API/response/userAPIResponse"
import { reject } from "cypress/types/bluebird"
const baseUrl = Cypress.config().baseUrl

export const URLS = {
  users: `${baseUrl}/api/users`
  // users:`https://conduit.productionready.io/api/users`
}
export default class addUser {
  static addNewUserViaAPI() {
    return new Cypress.Promise<ICreateEmployeeResponse>((resolve, reject) => {
      cy.addNewUser(URLS.users, userInit.initUser())
    })
  }
}
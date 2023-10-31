import { ICreateEmployeePayload } from "../API/Payload/userAPIPayload"
export default class userInit {

    static initUser(): ICreateEmployeePayload {
        let createUserPayload: ICreateEmployeePayload = {
            user: {
                username: "Israa" + Math.random() * 20,
                email: "Israa" + Math.random() * 20 + "@gmail.com",
                password: "123"
            }
        }
        return createUserPayload;
    }
}
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js"



export class AuthService {
  
       client=new Client();
       account;

       constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account= new Account(this.client)
       
       }

       async createAccount({email,password,name}){
            try{
              
                const userAccount=  await this.account.create(ID.unique(),email,password,name)
                 if(userAccount){
                    await this.login({email,password})
                   return userAccount;
                     
                 }
                 else{
                    return userAccount
                 }
              
            }
            catch(error){
                throw error;
            }
       }

       async login({email,password}){
        try {
          
            return await this.account.createEmailPasswordSession(email,password)
             
        } catch (error) {
            throw error;
        }

       }

    //    async getCurrentUser(){
    //        try {
    //          return  await this.account.get();
    //        } catch (error) {
    //           throw error
    //        }
           
    //    }

    async getCurrentUser() {
        try {
          // Attempt to retrieve the current user information
          const user = await this.account.get();
          return user;
        } catch (error) {
          // Handle error when user is not authenticated or other errors
          if (error.code === 401) {
            // User is not authenticated
            console.error("User is not authenticated. Please log in.");
            throw new Error("User is not authenticated. Please log in.");
          } else {
            // Handle other errors
            console.error("Error fetching user data:", error.message);
            throw error;
          }
        }
      }
      

       async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
       }

}
  const authService= new AuthService();

export default authService


// import { Client, Account, ID } from "appwrite";
// import conf from "../conf/conf.js";

// export class AuthService {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//       .setEndpoint(conf.appwriteUrl)
//       .setProject(conf.appwriteProjectId);
//     this.account = new Account(this.client);
//   }

//   /**
//    * Creates a new account with email, password, and name.
//    * @param {Object} param0
//    * @param {string} param0.email - User's email.
//    * @param {string} param0.password - User's password.
//    * @param {string} param0.name - User's name.
//    * @returns {Promise<Object>} Created user account data or an error.
//    */
//   async createAccount({ email, password, name }) {
//     try {
//       const userAccount = await this.account.create(ID.unique(), email, password, name);
//       if (userAccount){
//         // Automatically log in the user after account creation
//         await this.login({ email, password });
//         return userAccount;  // Return created account data
//       } else {
//         throw new Error("Failed to create account.");
//       }
//     } catch (error) {
//       throw error;  // Rethrow the error
//     }
//   }
//   /**
//    * Logs in a user using email and password.
//    * @param {Object} param0
//    * @param {string} param0.email - User's email.
//    * @param {string} param0.password - User's password.
//    * @returns {Promise<Object>} Session data or an error.
//    */
//   async login({ email, password }) {
//     try {
//       return await this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//       throw error;  // Rethrow the error to be handled by the calling code
//     }
//   }

//   /**
//    * Retrieves the current logged-in user.
//    * @returns {Promise<Object>} Current user data or an error.
//    */
//   async getCurrentUser() {
//     try {
//       const user = await this.account.get();
//       return user;
//     } catch (error) {
//       if (error.code === 401) {
//         // If the user is not authenticated, handle this specifically
//         console.error("User is not authenticated. Please log in.");
//         throw new Error("User is not authenticated. Please log in.");
//       } else {
//         // Handle other errors generically
//         console.error("Error fetching user data:", error.message);
//         throw error;
//       }
//     }
//   }

//   /**
//    * Logs out the current user by deleting their sessions.
//    * @returns {Promise<void>} Void or an error if logout fails.
//    */
//   async logout() {
//     try {
//       await this.account.deleteSessions();
//     } catch (error) {
//       throw error;  // Rethrow any error that occurs during logout
//     }
//   }
// }

// // Instantiate and export the AuthService
// const authService = new AuthService();
// export default authService;

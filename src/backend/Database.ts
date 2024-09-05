import { Client , Databases ,ID, Query} from 'appwrite';

class Database {
    client = new Client();
    databases  

    constructor() {
        this.client
            .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_URL))
            .setProject(String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)); 

        this.databases = new Databases(this.client)
    }

    async createMemberDocument({userId,tasks,ProfilePicture}:{userId:string,tasks?:string[],ProfilePicture:string}){
      try {
        return await this.databases.createDocument(String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),String(process.env.NEXT_PUBLIC_APPWRITE_MEMBER_COLLECTION_ID),ID.unique(),{userId:userId,Profile_Picture:ProfilePicture})
      } catch (error) {
        console.log("Create Document Error : ",error);
      }
    }

    async getAllUsers(){
        try {
            return await this.databases.listDocuments(String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),String(process.env.NEXT_PUBLIC_APPWRITE_MEMBER_COLLECTION_ID))
        } catch (error) {
            console.log("getAllUsers error :",error);
        }
    }

    async getUserData(id:string){
        try { 
          const userData = await this.databases.listDocuments(String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),String(process.env.NEXT_PUBLIC_APPWRITE_MEMBER_COLLECTION_ID),[Query.equal("userId",id)])
            return userData.documents[0]
        } catch (error) {
            console.log("Get userData Error :",error);
        }

    }
    
    async updateUserPhoto({id,photoid}:{id:string,photoid:string}){
        try {
            return await this.databases.updateDocument(String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),String(process.env.NEXT_PUBLIC_APPWRITE_MEMBER_COLLECTION_ID),id,{PhotoId:photoid})    
        } catch (error) {
            console.log("Update User Data Error : ",error);
        }
    }

    async updateUserInfo({id,name}:{id:string,name:string}){
        try {
            return await this.databases.updateDocument(String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),String(process.env.NEXT_PUBLIC_APPWRITE_MEMBER_COLLECTION_ID),id,{Name:name})    
        } catch (error) {
            console.log("Update User Data Error : ",error);
        }
    }

}

const DBService = new Database()

export default DBService
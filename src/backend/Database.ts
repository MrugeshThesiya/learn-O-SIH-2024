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

    async getData(){
        try {
            return await this.databases.listDocuments(String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),String(process.env.NEXT_PUBLIC_APPWRITE_DATA_COLLECTION_ID),[Query.select(["$id","Text","videoId"])])
        } catch (error) {
            console.log("getData error :",error);
        }
    }

}

const DBService = new Database()

export default DBService
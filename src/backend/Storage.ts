import { Client , Storage ,ID} from 'appwrite';

class storage {
    client = new Client();
    store

    constructor() {
        this.client
            .setEndpoint(String(process.env.NEXT_PUBLIC_APPWRITE_URL))
            .setProject(String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)); 

        this.store = new Storage(this.client);
    }

    async getVideo(id:string){
        try {
            return await this.store.getFilePreview(String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),id)
        } catch (error) {
            console.log("getVideo error : ",error);
            
        }
    }

}

const storageService = new storage()

export default storageService
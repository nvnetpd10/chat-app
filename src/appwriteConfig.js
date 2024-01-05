import { Client  , Databases , Account} from 'appwrite';

export const PROJECT_ID = '64a5a97d9c4146132c39'
export const DATABASE_ID = '64a5a9e750b47d7b82bb'
export const COLLECTION_ID_MESSAGES = '64a5aa07bb2842fb6af8'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64a5a97d9c4146132c39');

export const databases = new Databases(client);
export const account = new Account(client);

 export default client;   
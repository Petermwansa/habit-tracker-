import { Account, Client } from 'react-native-appwrite';


export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECTID!)
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!);


export const account = new Account(client)




// const APPWRITE_PROJECT_ID = "684deb4e0019e39613b0";
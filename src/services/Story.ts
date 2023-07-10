import firestore from '@react-native-firebase/firestore';
import { uploadImage } from './Storage';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';


export const addStoryToFirestore = async(image:string,title:string,description:string,user:FirebaseAuthTypes.User|null)=>{
    const url=await uploadImage('',image);
    return await firestore().collection('Story').doc().set({
        title:title,
        description:description,
        image:url,
        timestamp:firestore.Timestamp.now(),
        userName:user?.displayName,
        userProfileImage:user?.photoURL
    })
}
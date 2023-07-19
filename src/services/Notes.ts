import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const addNotesToFirestore = async(title:string,description:string,user:FirebaseAuthTypes.User|null)=>{
    return await firestore().collection('Notes').doc().set({
        title:title,
        description:description,
        createdAt:firestore.Timestamp.now(),
        userUid:user?.uid,
    })
}


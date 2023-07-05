import firestore from '@react-native-firebase/firestore';

export const getDoctorsData=()=>firestore().collection('Doctors').get().then(snapshot=>snapshot.docs);
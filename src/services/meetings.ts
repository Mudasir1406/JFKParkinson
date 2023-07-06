import firestore from '@react-native-firebase/firestore';
import { ImageSourcePropType } from 'react-native';

export const getMeetings=async(date:string)=>{
    return await firestore().collection('Meetings').where('date','==',date).get().then((snapshot) => {
        const meetings = snapshot.docs.map((doc) => doc.data() as GetMeetingResponse);
        return meetings;
      })
      .catch((error) => {
        console.error('Error fetching Meetings:', error);
        return [] as GetMeetingResponse[];
      });
}


export const getMeetingsHome=async(date:string)=>{
    return await firestore().collection('Meetings').where('date','==',date).get().then((snapshot) => {
        const meetings = snapshot.docs.map((doc) => doc.data() as GetMeetingResponse);
        return meetings;
      })
      .catch((error) => {
        console.error('Error fetching Meetings:', error);
        return [] as GetMeetingResponse[]; 
      });
}
export type GetMeetingResponse ={
    date:string,
    heading:string,
    image:ImageSourcePropType,
    location:string,
    note:string,
    time:string,
    zoomlink:string,
} 
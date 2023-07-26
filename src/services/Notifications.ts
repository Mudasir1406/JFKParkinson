
import notifee, { AndroidImportance, AndroidVisibility, TimestampTrigger, TriggerType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

import {PermissionsAndroid, Platform} from 'react-native';


export const  onDisplayNotification=async(title:string,body:string,id:string)=> {
    // Request permissions (required for iOS)
    notifee
      .createChannel({
        id: 'default',
        name: 'Default Channel',
        visibility: AndroidVisibility.PUBLIC,
        importance: AndroidImportance.HIGH,
      })
      .then(channelId =>  notifee.displayNotification({
        title: title,
        body: body,
        android: {
          channelId,
          importance: AndroidImportance.HIGH,
          
          pressAction: {
            id: 'default',
            
          },
          
        },
        data:{
          id:id
        }
      }));
    // Display a notification
  }

  export const registerDevice=async ()=>{
    await messaging().registerDeviceForRemoteMessages()
    // Get the token
    const token = await messaging().getToken();
    console.log(token)
  }

  export const requestUserPermission=async()=> {
    if(Platform.OS==='ios')
    {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
    else{
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then(status=>console.log("status",status))
    }
   
  }

  export const onCreateTriggerNotification=async(date:Date,title:string,body:string)=> {
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), 
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: title,
        body: body,
        android: {
          channelId:'default',
        },
      },
      trigger,
    );
  }
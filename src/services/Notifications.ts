
import notifee, { AndroidImportance, AndroidVisibility } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

import {PermissionsAndroid, Platform} from 'react-native';


export const  onDisplayNotification=async()=> {
    // Request permissions (required for iOS)
    notifee
      .createChannel({
        id: 'default',
        name: 'Default Channel',
        visibility: AndroidVisibility.PUBLIC,
        importance: AndroidImportance.HIGH,
      })
      .then(channelId =>  notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
          channelId,
          importance: AndroidImportance.HIGH,
          // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
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
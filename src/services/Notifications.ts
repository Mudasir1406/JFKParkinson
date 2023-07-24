
import notifee, { AndroidImportance } from '@notifee/react-native';

export const  onDisplayNotification=async(channelId:string)=> {
    // Request permissions (required for iOS)
   
    // Display a notification
    await notifee.displayNotification({
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
    });
  }
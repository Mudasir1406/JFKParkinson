
import notifee, { AndroidImportance, AndroidVisibility } from '@notifee/react-native';

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
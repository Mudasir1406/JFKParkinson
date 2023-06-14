import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
export type RootStackParamsApp={
    
    Home:any;
    BottomTab:any;
    Onboarding:any;
    EventDetails:any;
    Profile:any;
    CreateStory:any;
    Story:any;
    Comments:any;
    Notifications:any;
}

export type RootBottomTabParams={
    Events:any;
    Post:any;
    Home:any;
    Consultation:any;
    Stories:any;
    EventDetails:any;
    Comments:any;
    CreateStory:any;
    Story:any;


}

export type RootStackParamsAuth={
    SignUp: any;
    SignIn: any;
    ForgetPassword: any;
}

//AppNavigator Screens
export type HomeNavigationType = NativeStackScreenProps<RootStackParamsApp, 'Home'>;
export type BottomTabNavigationType = NativeStackScreenProps<RootStackParamsApp, 'BottomTab'>;
export type OnboardingNavigationType = NativeStackScreenProps<RootStackParamsApp, 'Onboarding'>;
export type EventDetailsNavigationType = NativeStackScreenProps<RootStackParamsApp, 'EventDetails'>;
export type ProfileNavigationType = NativeStackScreenProps<RootStackParamsApp, 'Profile'>;
export type CreateStoryNavigationType = NativeStackScreenProps<RootStackParamsApp, 'CreateStory'>;
export type StoryNavigationType = NativeStackScreenProps<RootStackParamsApp, 'Story'>;
export type CommentsNavigationType = NativeStackScreenProps<RootStackParamsApp, 'Comments'>;
export type NotificationsNavigationType = NativeStackScreenProps<RootStackParamsApp, 'Notifications'>;

//Bottom Tab Screens
export type EventsNavigationType = BottomTabScreenProps<RootBottomTabParams, 'Events'>;
export type PostNavigationType = BottomTabScreenProps<RootBottomTabParams, 'Post'>;
export type ConsultationNavigationType = BottomTabScreenProps<RootBottomTabParams, 'Consultation'>;
export type StoriesNavigationType = BottomTabScreenProps<RootBottomTabParams, 'Stories'>;

//AuthenticationScreens
export type SignUpNavigationType = NativeStackScreenProps<RootStackParamsAuth, 'SignUp'>;
export type SignInNavigationType = NativeStackScreenProps<RootStackParamsAuth, 'SignIn'>;
export type ForgetPasswordNavigationType = NativeStackScreenProps<RootStackParamsAuth, 'ForgetPassword'>;


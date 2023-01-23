import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import App from "./components/Login";
import Calendar from "./components/EventCalendar";
import Dboard from "./components/dashboard";
import Fpass from "./components/forgotPass";
import ODList from './components/odlist';

const AP =  createStackNavigator(
  {
    Welcome :{screen:App},
    DashBoard :{screen:Dboard},
    ForgetPassword :{screen:Fpass},
    Calendar :{screen:Calendar},
    Invitations :{screen:ODList}
  }
);

export default createAppContainer(AP);

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Welcome" component={App} options={{title: 'Welcome'}}/>
//         <Stack.Screen name="DashBoard" component={Dboard} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MyStack;
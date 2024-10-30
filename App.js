import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import Perfil from "./components/Perfil.jsx"
import "./global.css"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name='Perfil' component={Perfil}/>
    </Stack.Navigator>

    <Text></Text>
  </NavigationContainer>
  );
}
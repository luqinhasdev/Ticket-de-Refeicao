// src/App.js
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importando todas as telas
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ADMScreen from './screens/ADMScreen';
import BreakScreen from './screens/BreakScreen';
import LocationScreen from './screens/LocationScreen';
import LoginScreen from './screens/LoginScreen'; // Seu componente LoginScreen
import TicketReceiptScreen from './screens/TicketReceiptScreen';
import TicketValidationScreen from './screens/TicketValidationScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        {/* Incluindo a tela de Login no navegador como a tela inicial */}
        <Drawer.Screen name="Login" component={LoginScreen} />
        
        {/* As outras telas do aplicativo */}
        <Drawer.Screen name="ADM" component={ADMScreen} />
        <Drawer.Screen name="Break" component={BreakScreen} />
        <Drawer.Screen name="Location" component={LocationScreen} />
        <Drawer.Screen name="Ticket Receipt" component={TicketReceiptScreen} />
        <Drawer.Screen name="Ticket Validation" component={TicketValidationScreen} />
        
        {/* Adicione as telas que você ainda não tem, como 'Home' e 'Profile' */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
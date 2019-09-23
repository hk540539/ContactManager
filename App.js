// imports

import HomeScreen from "./Screens/HomeScreen";
import EditContactsScreen from "./Screens/EditContactsScreen";
import CreateContactsScreen from "./Screens/CreateContactsScreen";
import ViewContactsScreen from "./Screens/ViewContactsScreen";

// import react navigation

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Edit: { screen: EditContactsScreen },
    Create: { screen: CreateContactsScreen },
    View: { screen: ViewContactsScreen }
  },
  {
    defaultNavigationOptions: {
      title: "App",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#0A79DF"
      },
      headerTitleStyle: { color: "#FFF" }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;

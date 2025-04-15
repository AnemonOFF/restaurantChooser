import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./listScreen";
import AddScreen from "./addScreen";

const Stack = createStackNavigator();

const PeopleScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="PeopleList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PeopleList" component={ListScreen} />
      <Stack.Screen name="PeopleAdd" component={AddScreen} />
    </Stack.Navigator>
  );
};

export default PeopleScreen;

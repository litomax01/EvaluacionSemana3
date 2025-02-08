import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen1 from '../screens/ImageScreen1';
import ImageScreen2 from '../screens/ImageScreen2';
import ComparisonScreen from '../screens/ComparisonScreen';
import ComparisonScreen2 from '../screens/ComparisonScreen2';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Image1" component={ImageScreen1} />
      <Stack.Screen name="Image2" component={ImageScreen2} />
      <Stack.Screen name="Comparison1" component={ComparisonScreen} />
      <Stack.Screen name="Comparison2" component={ComparisonScreen2} />
    </Stack.Navigator>
  );
}

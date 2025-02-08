import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen1 from '../screens/ImageScreen1';
import ImageScreen2 from '../screens/ImageScreen2';
import ComparisonScreen from '../screens/ComparisonScreen';
import ComparisonScreen2 from '../screens/ComparisonScreen2';
import { SCREENS } from './routes';

type RootStackParamList = {
  Home: undefined;
  Image1: undefined;
  Image2: undefined;
  Comparison1: undefined;
  Comparison2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.IMAGE1} component={ImageScreen1} />
      <Stack.Screen name={SCREENS.IMAGE2} component={ImageScreen2} />
      <Stack.Screen name={SCREENS.COMPARISON1} component={ComparisonScreen} />
      <Stack.Screen name={SCREENS.COMPARISON2} component={ComparisonScreen2} />
    </Stack.Navigator>
  );
}

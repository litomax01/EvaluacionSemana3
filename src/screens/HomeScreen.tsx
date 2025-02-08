import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/globalStyles';
import { SCREENS } from '../navigation/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<any>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>BIENVENIDO</Text>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate(SCREENS.IMAGE1)}>
        <Text style={globalStyles.buttonText}>Imagen 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate(SCREENS.IMAGE2)}>
        <Text style={globalStyles.buttonText}>Imagen 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate(SCREENS.COMPARISON1)}>
        <Text style={globalStyles.buttonText}>{'>='}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate(SCREENS.COMPARISON2)}>
        <Text style={globalStyles.buttonText}>{'<='}</Text>
      </TouchableOpacity>
    </View>
  );
}

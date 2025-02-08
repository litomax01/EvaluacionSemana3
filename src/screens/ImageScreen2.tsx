import { View, Text, Image, StyleSheet } from 'react-native';

export default function ImageScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagen 2</Text>
      <Image source={require('../../assets/image2.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

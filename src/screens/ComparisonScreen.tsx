import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ComparisonScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const compareNumbers = () => {
    setResult(Number(num1) >= Number(num2) ? 'Mayor o igual' : 'Menor');
  };

  return (
    <View style={styles.container}>
      <Text>Ingrese dos números:</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNum1} />
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNum2} />
      <Button title="Comparar" onPress={compareNumbers} />
      {result !== '' && <Text>Resultado: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  input: { borderWidth: 1, width: '80%', margin: 10, padding: 5 },
});

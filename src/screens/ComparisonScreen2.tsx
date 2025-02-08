import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function ComparisonScreen2() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const compareNumbers = () => {
    setResult(parseFloat(num1) <= parseFloat(num2) ? 'Número menor o igual' : 'Número mayor');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Número 1" keyboardType="numeric" onChangeText={setNum1} />
      <TextInput style={styles.input} placeholder="Número 2" keyboardType="numeric" onChangeText={setNum2} />
      <CustomButton title="≤" onPress={compareNumbers} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#28a745',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const ComparisonScreen2 = () => {
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
};

export default ComparisonScreen2;

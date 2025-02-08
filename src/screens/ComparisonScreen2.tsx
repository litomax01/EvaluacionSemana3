import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
import { globalStyles } from '../styles/globalStyles';

const ComparisonScreen2 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const compareNumbers = () => {
    setResult(parseFloat(num1) <= parseFloat(num2) ? 'Número menor o igual' : 'Número mayor');
  };

  return (
    <View style={globalStyles.container}>
      <TextInput style={globalStyles.input} placeholder="Número 1" keyboardType="numeric" onChangeText={setNum1} />
      <TextInput style={globalStyles.input} placeholder="Número 2" keyboardType="numeric" onChangeText={setNum2} />
      <CustomButton title="≤" onPress={compareNumbers} />
      <Text style={globalStyles.result}>{result}</Text>
    </View>
  );
};

export default ComparisonScreen2;

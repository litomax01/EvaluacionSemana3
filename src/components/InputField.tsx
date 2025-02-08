import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputProps> = ({ placeholder, value, onChangeText }) => {
  return <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} keyboardType="numeric" />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default InputField;

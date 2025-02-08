import React from 'react';
import { TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={globalStyles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
    />
  );
};

export default InputField;

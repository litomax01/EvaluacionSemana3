import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

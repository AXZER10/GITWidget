// CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  ContainerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  title, 
  handlePress, 
  ContainerStyles = '', 
  textStyles = '', 
  isLoading = false 
}) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-blue-400 rounded-tr-3xl rounded-bl-3xl rounded-br-xl rounded-tl-xl min-h-[62px] justify-center items-center ${ContainerStyles} ${isLoading ? 'opacity-50' : ''}`} 
      disabled={isLoading} 
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`} >{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

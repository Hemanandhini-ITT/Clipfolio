import React from 'react';
import { Button } from 'react-native';

interface LogoutButtonProps {
  onPress: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return <Button title="Logout" onPress={onPress} color="#d11a2a" />;
};

export default LogoutButton;

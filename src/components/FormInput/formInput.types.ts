import {TextInput} from 'react-native';

export interface FormInputHandle {
  getValue: () => string;
  isValid: () => boolean;
}

export interface FormInputProps extends React.ComponentProps<typeof TextInput> {
  label: string;
  required?: boolean;
  type?: 'email' | 'phone' | 'text';
  onValueChange?: (valid: boolean) => void;
}

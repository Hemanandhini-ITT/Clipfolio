import { KeyboardTypeOptions } from 'react-native';

export interface FormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export type FormField = {
  name: keyof FormData;
  label: string;
  keyboardType?: KeyboardTypeOptions;
};

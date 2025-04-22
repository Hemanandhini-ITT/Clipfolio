import * as yup from 'yup';
import { FormData } from '../components/ReactHookForm/reactHookForm.types';

export const formValidation: yup.ObjectSchema<FormData> = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().optional(),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string().matches(/^\d{5}$/, 'Zip code must be 5 digits').required('Zip code is required'),
});

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormData} from '../components/ReactHookForm/reactHookForm.types';
import {formValidation} from './useValidation';

export const usePersonalDetailsForm = () =>
  useForm<FormData>({
    resolver: yupResolver(formValidation),
  });

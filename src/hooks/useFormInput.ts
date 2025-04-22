import {useCallback, useEffect, useState} from 'react';

export const useFormInput = (
  type: 'email' | 'phone' | 'text',
  required: boolean | undefined,
  onValueChange?: (valid: boolean) => void,
) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const validate = useCallback((): boolean => {
    if (required && !value.trim()) return false;

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value.trim());
    }

    if (type === 'phone') {
      const phoneRegex = /^[0-9+\-\s]{10,12}$/;
      return phoneRegex.test(value.trim());
    }

    return true;
  }, [required, type, value]);

  const getErrorMessage = useCallback(() => {
    if (required && !value.trim()) return 'This field is required';
    if (type === 'email') return 'Invalid email format';
    if (type === 'phone') return 'Invalid phone number';
    return '';
  }, [required, type, value]);

  useEffect(() => {
    if (!touched) return;
    const isValid = validate();
    onValueChange?.(isValid);
  }, [value, validate, onValueChange, touched]);

  return {
    value,
    setValue,
    touched,
    setTouched,
    validate,
    getErrorMessage,
    showError: touched && !validate(),
  };
};

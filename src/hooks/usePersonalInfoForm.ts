import {useCallback, useMemo, useRef, useState} from 'react';
import {FormInputHandle} from '../components/FormInput/formInput.types';

const usePersonalInfoForm = () => {
  const firstNameRef = useRef<FormInputHandle>(null);
  const lastNameRef = useRef<FormInputHandle>(null);
  const emailRef = useRef<FormInputHandle>(null);
  const phoneRef = useRef<FormInputHandle>(null);
  const addressRef = useRef<FormInputHandle>(null);
  const cityRef = useRef<FormInputHandle>(null);
  const stateRef = useRef<FormInputHandle>(null);
  const zipRef = useRef<FormInputHandle>(null);

  const [validStates, setValidStates] = useState<Record<string, boolean>>({});

  const updateValidity = useCallback((field: string, isValid: boolean) => {
    setValidStates(prev => ({...prev, [field]: isValid}));
  }, []);

  const validityHandlers = useMemo(
    () => ({
      firstName: (v: boolean) => updateValidity('firstName', v),
      lastName: (v: boolean) => updateValidity('lastName', v),
      email: (v: boolean) => updateValidity('email', v),
      phone: (v: boolean) => updateValidity('phone', v),
      address: (v: boolean) => updateValidity('address', v),
      city: (v: boolean) => updateValidity('city', v),
      state: (v: boolean) => updateValidity('state', v),
      zip: (v: boolean) => updateValidity('zip', v),
    }),
    [updateValidity],
  );

  const allValid =
    Object.keys(validStates).length === 8 &&
    Object.values(validStates).every(v => v === true);

  const getFormData = () => ({
    firstName: firstNameRef.current?.getValue(),
    lastName: lastNameRef.current?.getValue(),
    email: emailRef.current?.getValue(),
    phone: phoneRef.current?.getValue(),
    address: addressRef.current?.getValue(),
    city: cityRef.current?.getValue(),
    state: stateRef.current?.getValue(),
    zip: zipRef.current?.getValue(),
  });

  return {
    refs: {
      firstNameRef,
      lastNameRef,
      emailRef,
      phoneRef,
      addressRef,
      cityRef,
      stateRef,
      zipRef,
    },
    validityHandlers,
    allValid,
    getFormData,
  };
};

export default usePersonalInfoForm;

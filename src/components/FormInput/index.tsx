import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {TextInput, Text, ScrollView} from 'react-native';
import {useFormInput} from '../../hooks/useFormInput';
import styles from './formInput.styles';
import {FormInputHandle, FormInputProps} from './formInput.types';

const FormInput = forwardRef<FormInputHandle, FormInputProps>(
  ({label, required, type = 'text', onValueChange, ...props}, ref) => {
    const inputRef = useRef<TextInput>(null);
    const {value, setValue, setTouched, validate, showError, getErrorMessage} =
      useFormInput(type, required, onValueChange);

    useImperativeHandle(ref, () => ({
      getValue: () => value.trim(),
      isValid: validate,
    }));

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.requiredAsterisk}> *</Text>}
        </Text>
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={text => {
            setValue(text);
            setTouched(true);
          }}
          style={[
            styles.input,
            showError ? styles.inputError : styles.inputNormal,
          ]}
          {...props}
        />
        {showError && <Text style={styles.errorText}>{getErrorMessage()}</Text>}
      </ScrollView>
    );
  },
);

export default FormInput;

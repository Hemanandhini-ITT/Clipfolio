import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Controller, FieldValues} from 'react-hook-form';
import {styles} from './reactHookInputField.styles';
import {TextInputFieldProps} from './reactHookFormInput.types';

const TextInputField = <T extends FieldValues>({
  name,
  label,
  control,
  errors,
  keyboardType = 'default',
}: TextInputFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field}) => (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            value={field.value?.toString() ?? ''}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            style={[
              styles.input,
              errors[name] ? styles.inputError : styles.inputDefault,
            ]}
            keyboardType={keyboardType}
          />
          {errors[name] && (
            <Text style={styles.errorText}>
              {errors[name]?.message?.toString()}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default TextInputField;

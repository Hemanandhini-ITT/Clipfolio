import React from 'react';
import { View, Button, Alert } from 'react-native';
import TextInputField from '../../ReactHookFormInput';
import { usePersonalDetailsForm } from '../../hooks/useReactHooks';
import { fieldConfig } from '../../utils/constants';
import { FormData } from '../ReactHookForm/reactHookForm.types';
import { styles } from './reactHookForm.styles';

const PersonalDetailsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = usePersonalDetailsForm();

  const onSubmit = (data: FormData) => {
    console.log(data);
    Alert.alert('Form Submitted');
  };

  return (
    <View style={styles.container}>
      {fieldConfig.map((field) => (
        <TextInputField<FormData>
          key={field.name}
          name={field.name}
          label={field.label}
          control={control}
          errors={errors}
        />
      ))}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default PersonalDetailsForm;

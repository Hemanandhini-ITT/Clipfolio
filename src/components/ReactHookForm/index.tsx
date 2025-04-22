import React from 'react';
import { Button, FlatList, View } from 'react-native';
import TextInputField from '../ReactHookFormInput';
import { usePersonalDetailsForm } from '../../hooks/useReactHooks';
import { fieldConfig } from '../../utils/constants';
import { FormData } from '../ReactHookForm/reactHookForm.types';
import { styles } from './reactHookForm.styles';
import { showToast } from '../../utils/toastUtils';

const PersonalDetailsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = usePersonalDetailsForm();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    showToast('success', 'Form Submitted', 'Your personal details have been saved.');
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={fieldConfig}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TextInputField<FormData>
          name={item.name}
          label={item.label}
          control={control}
          errors={errors}
          required={item.required}
        />
      )}
      ListFooterComponent={
        <View>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      }
    />
  );
};

export default PersonalDetailsForm;

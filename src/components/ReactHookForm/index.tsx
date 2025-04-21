import React from 'react';
import { Button, ToastAndroid, Platform, Alert, FlatList, View } from 'react-native';
import TextInputField from '../ReactHookFormInput';
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
    console.log('Form submitted:', data);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Form Submitted', ToastAndroid.SHORT);
    } else {
      Alert.alert('Form Submitted');
    }
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

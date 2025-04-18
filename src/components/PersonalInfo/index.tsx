import React from 'react';
import {ScrollView, Button, View, Alert} from 'react-native';
import FormInput from '../FormInput';
import usePersonalInfoForm from '../../hooks/usePersonalInfoForm';
import styles from './personalInfo.styles';

const PersonalInfoForm = () => {
  const {refs, validityHandlers, allValid, getFormData} = usePersonalInfoForm();

  const handleSubmit = () => {
    const formData = getFormData();
    console.log('Form Data:', formData);
    Alert.alert('Submitted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormInput
        label="First Name"
        ref={refs.firstNameRef}
        required
        onValueChange={validityHandlers.firstName}
      />
      <FormInput
        label="Last Name"
        ref={refs.lastNameRef}
        required
        onValueChange={validityHandlers.lastName}
      />
      <FormInput
        label="Email"
        ref={refs.emailRef}
        required
        type="email"
        keyboardType="email-address"
        onValueChange={validityHandlers.email}
      />
      <FormInput
        label="Phone Number"
        ref={refs.phoneRef}
        required
        type="phone"
        keyboardType="phone-pad"
        onValueChange={validityHandlers.phone}
      />
      <FormInput
        label="Address"
        ref={refs.addressRef}
        required
        onValueChange={validityHandlers.address}
      />
      <FormInput
        label="City"
        ref={refs.cityRef}
        required
        onValueChange={validityHandlers.city}
      />
      <FormInput
        label="State"
        ref={refs.stateRef}
        required
        onValueChange={validityHandlers.state}
      />
      <FormInput
        label="ZIP Code"
        ref={refs.zipRef}
        required
        keyboardType="number-pad"
        onValueChange={validityHandlers.zip}
      />

      <View style={styles.submitButtonWrapper}>
        <Button title="Submit" onPress={handleSubmit} disabled={!allValid} />
      </View>
    </ScrollView>
  );
};

export default PersonalInfoForm;

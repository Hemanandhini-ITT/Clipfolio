import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
  },
  requiredAsterisk: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
  inputNormal: {
    borderColor: '#ccc',
  },
  inputError: {
    borderColor: 'red',
  },
});

export default styles;

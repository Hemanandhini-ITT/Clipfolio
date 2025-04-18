import {StyleSheet} from 'react-native';

const profile = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  form: {
    width: '100%',
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    width: '50%',
    borderRadius: 8,
    marginBottom: 15,
  },

  imagePicker: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginBottom: 10,
  },

  imagePickerText: {
    color: 'white',
    fontWeight: 'bold',
  },

  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  label: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 12,
    color: '#333',
    flexDirection: 'row',
  },
});

export default profile;

import {StyleSheet} from 'react-native';

const photoGallery = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    margin: 10,
  },

  loader: {
    marginTop: 50,
  },
});

export default photoGallery;

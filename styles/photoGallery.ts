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

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullscreenImage: {
    width: '100%',
    height: '100%',
  },

  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default photoGallery;

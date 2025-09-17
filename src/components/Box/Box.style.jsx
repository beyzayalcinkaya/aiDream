import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.42)',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'rgba(120, 70, 255, 0.6)',
  },
  image: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  desc: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.78)',
    marginTop: 6,
    fontStyle: 'italic',
    lineHeight: 25,
  },
});

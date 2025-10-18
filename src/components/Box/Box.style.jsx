import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    marginRight: 12,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Avenir',
  },
  titleWithDesc: {
    marginBottom: 5,
  },
  desc: {
    fontSize: 15,
    fontFamily: 'Arial',
    color: 'rgba(245,243,255,0.82)',
    marginTop: 6,
    fontStyle: 'italic',
    lineHeight: 25,
  },
  gradientBorder: {
    borderRadius: 20,
    padding: 2,
    margin: 10,
  },
  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(139, 116, 230, 0.1)',
    borderRadius: 20,
    padding: 20,
  },
});

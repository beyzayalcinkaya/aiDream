import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.35)',
    //minHeight: 60,
  },
  image: {
    width: 24,
    height: 24,
  },
  imageContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#F5F3FF',
  },
  titleWithDesc: {
    marginBottom: 5,
  },
  desc: {
    fontSize: 15,
    color: 'rgba(245,243,255,0.82)',
    marginTop: 6,
    fontStyle: 'italic',
    lineHeight: 25,
  },
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row', // resim + yazı yanyana
    alignItems: 'center',
    backgroundColor: '#999',
    borderRadius: 10,
    padding: 16,
    margin: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

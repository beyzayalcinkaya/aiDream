import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
  },
  topContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 40,
  },
  singleBox: {
    margin: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 10,

    marginTop: 12,
  },
  halfBox: {
    flex: 1,
  },
  dreamTellsText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    padding: 10,
    marginTop: 40,
    marginHorizontal: 20,
  },
});

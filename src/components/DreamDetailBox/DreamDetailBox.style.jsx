import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    marginBottom: 14,
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.18)',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  cardTitle: {
    color: '#EBDCFE',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  paragraph: {
    color: 'rgba(245, 243, 255, 0.88)',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.15,
  },
});

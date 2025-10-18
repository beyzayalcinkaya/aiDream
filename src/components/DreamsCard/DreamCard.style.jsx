import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 24,
    margin: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.35)',
  },

  titleContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 139, 250, 0.18)',
  },
  title: {
    color: 'rgba(235, 220, 254, 0.9)',
    fontStyle: 'italic',
    fontSize: 17,
    textAlign: 'center',
  },
  content: {
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: 'rgba(124, 58, 237, 0.10)',
    borderRadius: 15,
    borderLeftWidth: 2,
    borderLeftColor: 'rgba(167, 139, 250, 0.5)',
  },
  sectionTitle: {
    color: 'rgba(120, 70, 255, 0.9)',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  dreamDesc: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.3,
    fontWeight: '500',
  },
  answerDesc: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.3,
    fontStyle: 'italic',
    fontWeight: '400',
  },
  line: {
    height: 2,
    backgroundColor: 'rgba(167, 139, 250, 0.35)',
    marginVertical: 16,
    borderRadius: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(167, 139, 250, 0.22)',
  },
  dateText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0E0A1F',
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    opacity: 0.9,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: 'rgba(140, 80, 255, 0.25)',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(140, 80, 255, 0.7)',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  cardContainer: {
    borderRadius: 22,
    padding: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.10)',
  },
  titlecont: {
    marginTop: 4,
    marginBottom: 16,
    padding: 18,
    borderRadius: 18,
    backgroundColor: 'rgba(124, 58, 237, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.45)',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.3,
    marginBottom: 8,
  },
  accentBar: {
    height: 4,
    width: 80,
    backgroundColor: '#A78BFA',
    borderRadius: 999,
    marginBottom: 12,
    shadowColor: '#A78BFA',
    shadowOpacity: 0.9,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
  heroSubtitle: {
    color: 'rgba(255, 255, 255, 0.88)',
    fontSize: 14,
    lineHeight: 20,
  },

  sectionDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginVertical: 8,
  },
  purple: {
    backgroundColor: 'rgba(124, 58, 237, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.45)',
  },
  footer: {
    marginTop: 24,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    color: 'rgba(255, 255, 255, 0.75)',
    textAlign: 'center',
    fontSize: 13,
    letterSpacing: 0.3,
  },
});

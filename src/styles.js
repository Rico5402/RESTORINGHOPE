// src/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
  },
  topSpace: {
    height: 50,
  },
  sidebarButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 2,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3C454C',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 24,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#3C454C',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 260,
    height: 55,
    marginVertical: 12,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: '#8CD1BC',
    fontSize: 18,
    fontWeight: '500',
  },
  projectItem: {
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  paginationContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationDotInactive: {
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  projectImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 8,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 8,
  },
  // Other specific styles for your form or project screens can go here...
});

export default styles;

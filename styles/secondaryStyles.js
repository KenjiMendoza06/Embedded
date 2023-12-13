// secondaryStyles
import { StyleSheet } from 'react-native';

const commonCardStyles = {
  borderWidth: 2,
  borderRadius: 20,
  shadowColor: '#333333',
  shadowOpacity: 0.6,
  shadowRadius: 4,
  shadowOffset: {
    width: 0, 
    height: 4,
  },
  elevation: 4, 
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
};


const secondaryStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    ...commonCardStyles,
    marginTop: 40,
    paddingTop: 10,
    width: 200,
    height: 50,
    borderWidth: 0,
  },
  
  parkingRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  parkingText: {
    backgroundColor: 'red',
    ...commonCardStyles,
    paddingTop: 50,
    margin: 10,
    width: 250,
    height: 120,
    overflow: 'hidden',
  },

  availableParking: {
    backgroundColor: 'green',
  },

  occupiedParking: {
    backgroundColor: 'red',
  },

  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  chatbotButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 3, 3, 0.7)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default secondaryStyles;

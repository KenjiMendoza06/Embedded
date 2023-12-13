import { StyleSheet} from 'react-native'

const mainStyles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    logo: {
        flex: 9,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        opacity: 0.8,
    },

    container: {
        flex: 1,
    },

    bottomLayer: {
        flex: 0.9,
        justifyContent: 'center',
    },


    screen: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        width: '80%',
  },

  chatbotButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(3, 3, 3, 0.7)',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
        height: 50, 
  },

  buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
  },
})
export default mainStyles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fdd0d8',
    },

    bubbleContainer: {
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      top: 30,
      left: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    bubble: {
      backgroundColor: 'transparent',  
      borderWidth: 1,                  
      borderColor: '#F8F4EC',              
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,                
      width: '90%',                      
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 4 },
    },

    bubbleText: {
      color: '#000',                  
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },

    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      color: '#3C2415',
      fontWeight: 'bold',
    },

    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    loginButton: {
      backgroundColor: '#efb5ef',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },

    loginButtonText: {
      color: '#3C2415',
      fontSize: 16,
      fontWeight: 'bold',
    },

    link: {
      color: '#3C2415',
      textAlign: 'center',
      marginTop: 10,
    },
    
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: 10,
    },
  });
  
  export default styles;
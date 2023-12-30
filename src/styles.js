import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: '1',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'mediumseagreen',
    padding: 16,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    padding: 16,
    justifyContent: 'center',
  },
  option: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    padding: 16,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  textInput: {
    fontSize: 14,
    fontWeight: 'normal',
    paddingHorizontal: 100,
    justifyContent: 'center',
    backgroundColor:'#DDDDDD',
    marginBottom: 20
  },
  button: {
    marginTop:350,
    color:'mediumseagreen',
    backgroundColor: 'mediumseagreen',
    borderRadius: 10,
    justifyContent: 'space-between',
},
  activeButton: {
  backgroundColor: 'blue',
},
  buttonText: {
  color: 'white',
  fontWeight: 'bold',
},
});

export default styles;
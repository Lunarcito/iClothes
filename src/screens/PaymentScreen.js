import { Text, View, Button } from 'react-native';
import styles from '../styles';

export default function PaymentScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Succesful payment!
      </Text>  
    <View style={styles.button}>
      <Button style={styles.button} color='mediumseagreen'
        title="Buy more"
        onPress={() => navigation.navigate('Flash Sale')}
      />
    </View>           
    </View>
  );
}



import { Button, View, Text } from 'react-native'
import { useRecoilState } from 'recoil'
import { wishListState } from '../states/wishListState'
import styles from '../styles';
 
function MyCartScreen({ navigation }) {
  const [wishList, setWishList] = useRecoilState(wishListState)

  return (
    <View style={{marginTop: 30}}>
      {wishList.map((product) => (
          <View>
            <Text>{product.name}</Text>
            <Text>{product.cost}</Text>
          </View>
        ))}
        <Button style={styles.button} 
              color='green'
              title={'Buy now'}
              onPress={
                () => {navigation.navigate('Payment Screen', { wishList })
              }
            }
        />
    </View>
  );
}
	
export default MyCartScreen;
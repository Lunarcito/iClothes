import { Button, View, Text } from 'react-native'
import { useRecoilState } from 'recoil'
import { wishListState } from '../states/wishListState'
import styles from '../styles';
 
function MyCartScreen({ navigation }) {
  const [wishList, setWishList] = useRecoilState(wishListState)

  return (
    <View style={styles.container}>
      {wishList.map((product) => (
          <View style={styles.container}>
            <Text>{product.name}</Text>
            <Text>{product.cost}</Text>
          </View>
        ))}
        <View style={styles.button}>
        <Button
              color='mediumseagreen'
              title={'Buy now'}
              onPress={
                () => {
                  {
                  navigation.navigate('Payment Screen', { wishList })
                  setWishList([])
                }
              }
            }
        />          
        </View>
    </View>
  );
}
	
export default MyCartScreen;
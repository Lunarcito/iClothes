import { View, Button } from 'react-native'
import { wishListState } from '../states/wishListState'
import { useSetRecoilState} from 'recoil'
import styles from '../styles'
 
export default function AddToWishlist({ product }) {
  const setWishList = useSetRecoilState(wishListState);
 
  const handleAddToWishlist = () => {
    setWishList((oldWishList) => [...oldWishList, product]);
  };
	
  return (
    <View style={styles.container}>
      <Button title="Add to Cart" onPress={handleAddToWishlist} style={styles.button} color='mediumseagreen'/>
    </View>
  );
}
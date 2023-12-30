	
import { useRecoilState } from 'recoil'
import { TextInput, View, Text} from 'react-native';
import { filterState } from '../states/filterState';
import styles from '../styles';

export default function Filter() {
     
  const [filter, setFilter] = useRecoilState(filterState)
 
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
 
  return (
  <View style={styles.container}>
    <TextInput style={styles.textInput}
      onChangeText={ text => handleFilterChange(text) }
    />
    <Text>{ filter }</Text>
  </View>
  )
}
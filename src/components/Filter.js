	
import { useRecoilState } from 'recoil'
import { TextInput, View, Text} from 'react-native';
import { filterState } from '../states/filterState';

export default function Filter() {
     
  const [filter, setFilter] = useRecoilState(filterState)
 
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
 
  return (
  <View>
    <TextInput
      onChangeText={ text => handleFilterChange(text) }
    />
    <Text>{ filter }</Text>
  </View>
  )
}
import {View} from 'react-native';
import {styles} from '../assets/styles/styles';
import {StatusWidget} from '../components/StatusWidget';

export default function WidgetScreen({route}: any) {
  return (
    <View style={styles.centerContainer}>
      <StatusWidget phone={route.params.phoneNumber} />
    </View>
  );
}

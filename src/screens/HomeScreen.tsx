import {styles} from '../assets/styles/styles';
import {View} from 'react-native';
import {TopHeader} from '../components/TopHeader';
import {LiveRates} from '../components/LiveRates';
import {StatusWidget} from '../components/StatusWidget';
import {Wallet} from '../components/Wallet';
import {Portfolio} from '../components/Portfolio';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopHeader />
      <LiveRates />
      <StatusWidget />
      <Wallet />
      <Portfolio />
    </View>
  );
}

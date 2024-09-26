import {styles} from '../assets/styles/styles';
import {View} from 'react-native';
import {TopHeader} from '../components/TopHeader';
import {PhoneField} from '../components/PhoneField';
import {LiveRates} from '../components/LiveRates';
import {Wallet} from '../components/Wallet';
import {Portfolio} from '../components/Portfolio';

const HomeScreen = ({route}: any) => {
  return (
    <View style={styles.container}>
      <TopHeader />
      <LiveRates />
      <Wallet />
      <PhoneField />
      <Portfolio />
    </View>
  );
};

export default HomeScreen;

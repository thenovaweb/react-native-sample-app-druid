import {styles} from '../assets/styles/styles';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const Wallet = () => {
  const navigation: any = useNavigation();
  const navigateToScreen = () => {
    navigation.navigate('WidgetScreen', {
      name: 'WidgetScreen',
    });
  };

  return (
    <View style={styles.walletContainer}>
      <Text style={styles.walletTitle}>Wallet Balance</Text>
      <TouchableOpacity style={styles.depositButton} onPress={navigateToScreen}>
        <Text style={styles.depositText}>+ Deposit</Text>
      </TouchableOpacity>
      <Text style={styles.walletDescription}>
        Deposit money in your wallet to purchase any item!
      </Text>
    </View>
  );
};

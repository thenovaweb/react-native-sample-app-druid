import {View, Text} from 'react-native';
import {styles} from '../assets/styles/styles';

export const TopHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <Text style={styles.profileText}>OG</Text>
        </View>
        <Text style={styles.greeting}>Hello!</Text>
        <Text style={styles.userName}>User</Text>
      </View>
    </View>
  );
};

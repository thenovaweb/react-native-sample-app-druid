import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles/styles';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {cleanInput} from '../utils/helper';

export const PhoneField = () => {
  const [isError, setIsError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('987654321');

  const navigation: any = useNavigation();
  const navigateToScreen = () => {
    if (cleanInput(phoneNumber)) {
      navigation.navigate('WidgetScreen', {phoneNumber});
    } else {
      setIsError(true);
    }
  };

  return (
    <View style={styles.textFieldContainer}>
      {(isError || !phoneNumber) && !cleanInput(phoneNumber) && (
        <Text style={styles.errorText}>Please enter a valid phone number!</Text>
      )}
      <TextInput
        style={styles.textInput}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <TouchableOpacity style={styles.fieldButton} onPress={navigateToScreen}>
        <Text style={styles.text}>Initiate KYC</Text>
      </TouchableOpacity>
    </View>
  );
};

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles/styles';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {cleanInput} from '../utils/helper';
import Config from 'react-native-config';

export const PhoneField = () => {
  const [phoneNumber, setPhoneNumber] = useState('987654321');
  const [isError, setIsError] = useState(false);
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

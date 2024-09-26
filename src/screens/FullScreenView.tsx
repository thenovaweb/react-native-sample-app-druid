import Widget from '@thenovaweb/druid-ogold-rn-we-sdk';

export default function FullScreenView({navigation, route}: any) {
  const phone = route.params.phone;
  const onSuccess = () => {
    navigation.navigate('Home', {name: 'HomeScreen'});
  };

  return (
    <Widget
      clientUuid={process.env.REACT_APP_CLIENT_UUID!}
      clientSecret={process.env.REACT_APP_CLIENT_SECRET!}
      phone={phone}
      onSuccess={onSuccess}
    />
  );
}

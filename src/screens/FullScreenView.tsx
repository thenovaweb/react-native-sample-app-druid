import Widget from '@thenovaweb/druid-ogold-rn-we-sdk';

export default function FullScreenView({navigation}: any) {
  const onSuccess = () => {
    navigation.navigate('HomeScreen', {name: 'HomeScreen'});
  };

  return (
    <Widget
      clientUuid={process.env.EXPO_PUBLIC_CLIENT_SECRET!}
      clientSecret={process.env.EXPO_PUBLIC_CLIENT_SECRET!}
      phone={process.env.EXPO_PUBLIC_CLIENT_SECRET!}
      onSuccess={onSuccess}
    />
  );
}

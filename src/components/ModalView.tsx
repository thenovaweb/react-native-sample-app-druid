import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import Widget from '@thenovaweb/druid-ogold-rn-we-sdk';

const ModalView = (props: any) => {
  const {showModal, setShowModal} = props;
  const hideModal = () => setShowModal(false);

  const handleContinue = () => {
    setShowModal(false);
  };

  const styles = StyleSheet.create({
    contentContainerStyle: {
      height: '100%',
      width: '100%',
      backgroundColor: 'red',
    },
    modal: {
      display: 'flex',
    },
    button: {
      display: 'flex',
      flex: 1,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: 'auto',
      gap: 16,
    },
  });

  return (
    <Portal>
      <Modal
        style={styles.modal}
        visible={showModal}
        onDismiss={hideModal}
        contentContainerStyle={styles.contentContainerStyle}>
        <Widget
          clientSecret={process.env.EXPO_PUBLIC_CLIENT_SECRET!}
          clientUuid={process.env.EXPO_PUBLIC_CLIENT_SECRET!}
          phone={process.env.EXPO_PUBLIC_CLIENT_SECRET!}
          onSuccess={handleContinue}
        />
      </Modal>
    </Portal>
  );
};

export default ModalView;

import React from "react";
import { StyleSheet, View, Modal, Alert, Text } from "react-native";
import { OrderIcon } from "../assets/icons/Icons";
import { color } from "../styles/variables";
import { Button } from "./Button";

export const ModalWindow = ({ modalVisible, request, closeRequest }) => {
  return (
    <View style={styles.centeredView}>
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <OrderIcon />
            <Text style={styles.modalText}>{request}</Text>
            <View style={{ width: 146 }}>
              <Button type="primary" title="ok" action={closeRequest} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "100%",
    height: 248,
    backgroundColor: color.White,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: color.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    color: color.Gray,
  },
});

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  Pressable,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  PixelRatio,
} from "react-native";
import { Button } from "../../components";
import { color } from "../../styles/variables";
import { Form } from "./Form";

export const ItemScreen = ({
  route,
  modalVisible,
  setRequestStatus,
  SetOrderThunk,
  request,
  closeRequest,
}) => {
  const { title, img, price, description } = route.params;

  return (
    <View
      style={{
        height: "100%",
        paddingHorizontal: 12,
        backgroundColor: color.Bcg,
      }}
    >
      <Image source={{ uri: img }} style={{ height: "40%" }}></Image>
      <View style={{ height: "60%" }}>
        <View style={{ height: "50%", paddingTop: "5%" }}>
          {PixelRatio.get() <= 2 ? (
            <></>
          ) : (
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                color: color.Black,
              }}
            >
              Ordinary quadcopter
            </Text>
          )}

          <Text
            style={
              PixelRatio.get() <= 2
                ? { fontSize: 18, lineHeight: 18, marginBottom: "1%" }
                : { fontSize: 28, lineHeight: 36, marginBottom: "1%" }
            }
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 24,
              color: color.Primary,
              marginBottom: "2.5%",
            }}
          >
            {price}
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 22, color: color.Gray }}>
            {description}
          </Text>
        </View>
        <View
          style={{
            height: "50%",
            backgroundColor: color.Bcg,
          }}
        >
          <Form SetOrderThunk={SetOrderThunk} title={title} />
        </View>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            closeRequest();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{request ? "true" : "false"}</Text>

              <Button type="primary" title="ok" action={closeRequest} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 36,
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 8,
  },
  price: {
    height: 24,
    fontSize: 20,
    lineHeight: 24,
    color: color.Primary,
    marginBottom: 12,
  },
  description: {
    height: 22,
    fontSize: 16,
    lineHeight: 22,
    color: color.Gray,
    marginBottom: 36,
  },
  centeredView: {
    top: "30%",
    alignItems: "center",
    marginHorizontal: 12,
  },
  modalView: {
    width: "100%",
    height: 248,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

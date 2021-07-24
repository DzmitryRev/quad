import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  PixelRatio,
  KeyboardAvoidingView,
} from "react-native";

import { Form } from "./Form";

import { color } from "../../styles/variables";
import { ModalWindow } from "../../components";

export const ItemScreen = ({
  route,
  modalVisible,
  SetOrderThunk,
  request,
  closeRequest,
}) => {
  const { title, img, price, description } = route.params;
  return (
    <KeyboardAvoidingView
      style={styles.itemScreen}
      behavior="height"
      enabled={true}
      keyboardVerticalOffset={90}
    >
      <View>
        <Image source={{ uri: img }} style={styles.image}></Image>

        <View style={styles.bottomPanelContainer}>
          <View style={styles.descriptionContainer}>
            {PixelRatio.get() <= 2 ? (
              <></>
            ) : (
              <Text style={styles.descriptionContainerTitle}>
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
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <ModalWindow
            modalVisible={modalVisible}
            request={request}
            closeRequest={closeRequest}
          />
          <View style={styles.formContainer}>
            <Form SetOrderThunk={SetOrderThunk} title={title} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  itemScreen: {
    height: "100%",
    paddingHorizontal: 12,
    backgroundColor: color.Bcg,
  },
  image: {
    height: "40%",
  },
  bottomPanelContainer: {
    height: "60%",
  },
  descriptionContainer: {
    height: "50%",
    paddingTop: "5%",
  },
  descriptionContainerTitle: {
    fontSize: 16,
    lineHeight: 22,
    color: color.Black,
  },
  title: {
    height: 36,
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    lineHeight: 24,
    color: color.Primary,
    marginBottom: "2.5%",
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: color.Gray,
  },
  formContainer: {
    height: "50%",
    backgroundColor: color.Bcg,
  },
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

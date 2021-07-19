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
} from "react-native";
import { color } from "../../styles/variables";

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
    <View style={styles.itemPage}>
      <ScrollView>
        <Image source={img} style={styles.image}></Image>
        <Text style={styles.pageTitle}>Ordinary quadcopter</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{description}</Text>
        {/* <Form SetOrderThunk={SetOrderThunk} title={title} /> */}
      </ScrollView>

      {/* <View style={styles.centeredView}>
         <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            closeRequest();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                
              <Text style={styles.modalText}>
              {request?'true': 'false'}
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => closeRequest()}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal> 



      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  itemPage: {
    minHeight: "100%",
    paddingHorizontal: 12,
    backgroundColor: color.White,
    // display: 'flex',
    // justifyContent: 'space-between'
  },
  image: {
    width: "100%",
    height: 281,
    paddingBottom: 24,
  },
  pageTitle: {
    height: 22,
    fontSize: 16,
    lineHeight: 22,
  },
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
  modal: {
    width: 100,
    height: 100,
    backgroundColor: color.Black,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
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

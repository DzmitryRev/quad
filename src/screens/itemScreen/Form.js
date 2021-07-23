import React from "react";
import { PixelRatio, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { Button } from "../../components";
import { color } from "../../styles/variables";
import { ValidationSchema } from "../../utils/validator";

export const Form = ({ SetOrderThunk, title }) => (
  <Formik
    initialValues={{ name: "", phone: "", item: title }}
    onSubmit={(values) => SetOrderThunk(values)}
    validationSchema={ValidationSchema}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View
        style={[
          styles.form,
          PixelRatio.get() <= 2 ? styles.smallScreen : styles.standardScreen,
        ]}
      >
        <TextInput
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
          placeholder={touched.name && errors.name ? errors.name : "Имя"}
          style={[
            styles.input,
            touched.phone && errors.phone ? styles.red : styles.gray,
          ]}
        />
        {touched.email && errors.email && <Text>{errors.email}</Text>}
        <TextInput
          onChangeText={handleChange("phone")}
          onBlur={handleBlur("phone")}
          value={values.phone}
          placeholder={touched.phone && errors.phone ? errors.phone : "Телефон"}
          keyboardType="phone-pad"
          style={[
            styles.input,
            touched.phone && errors.phone ? styles.red : styles.gray,
          ]}
        />
        <Button action={handleSubmit} title="Заказать" />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  form: { height: "100%", justifyContent: "space-between", paddingTop: "3%" },
  standardScreen: {
    paddingBottom: "10%",
  },
  smallScreen: {
    paddingBottom: "3%",
  },
  input: {
    borderBottomWidth: 1,
    height: 30,
  },
  gray: {
    borderColor: color.Gray_light,
  },
  red: {
    borderColor: "#FF5A5F",
  },
});

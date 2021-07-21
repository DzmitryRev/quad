import React from "react";
import { PixelRatio, TextInput, View } from "react-native";
import { Formik } from "formik";
import { Button } from "../../components";
import { color } from "../../styles/variables";
import * as Yup from "yup";

const ValidationSchemaa = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  phone: Yup.string()
    .min(11, "Неверный номер")
    .max(13, "Неверный номер")
    .required("Обязательное поле"),
});

export const Form = ({ SetOrderThunk, title }) => (
  <Formik
    initialValues={{ name: "", phone: "", item: title }}
    onSubmit={(values) => SetOrderThunk(values)}
    validationSchema={ValidationSchemaa}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View
        style={
          PixelRatio.get() <= 2
            ? {
                height: "100%",
                justifyContent: "space-between",
                paddingTop: "3%",
                paddingBottom: "3%",
              }
            : {
                height: "100%",
                justifyContent: "space-between",
                paddingTop: "3%",
                paddingBottom: "10%",
              }
        }
      >
        <TextInput
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
          placeholder={touched.name && errors.name ? errors.name : "Имя"}
          style={
            touched.name && errors.name
              ? {
                  borderBottomWidth: 1,
                  height: 30,
                  borderColor: "#FF5A5F",
                }
              : {
                  borderBottomWidth: 1,
                  height: 30,
                  borderColor: color.Gray_light,
                }
          }
        />
        {touched.email && errors.email && <Text>{errors.email}</Text>}
        <TextInput
          onChangeText={handleChange("phone")}
          onBlur={handleBlur("phone")}
          value={values.phone}
          placeholder={touched.phone && errors.phone ? errors.phone : "Телефон"}
          keyboardType="phone-pad"
          style={
            touched.phone && errors.phone
              ? {
                  borderBottomWidth: 1,
                  height: 30,
                  borderColor: "#FF5A5F",
                }
              : {
                  borderBottomWidth: 1,
                  height: 30,
                  borderColor: color.Gray_light,
                }
          }
        />
        <Button action={handleSubmit} title="Заказать" />
      </View>
    )}
  </Formik>
);

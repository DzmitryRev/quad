import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  phone: Yup.string()
    .min(11, "Неверный номер")
    .max(13, "Неверный номер")
    .required("Обязательное поле"),
});

import { useState } from "react";

export const useForm = ( initialForm  ) => {
  const [Form, setForm] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...Form,
      [name]: value,
    });
  };
  const onResetForm = () => {
    setForm(initialForm);
  };
  return {
    ...Form,
    onInputChange,
    onResetForm,
  };
};

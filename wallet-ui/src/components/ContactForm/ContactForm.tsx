import { TextArea } from "components/ui";
import { Input } from "components/ui/Input";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <Input label="email" placeholder="nick@example.com" />
      <TextArea label="Message" maxLength={140} {...register} />
    </div>
  );
};

export default ContactForm;

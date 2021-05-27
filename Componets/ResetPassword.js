import React, { useState } from "react";
import Background from "../Componets/Background";
import BackButton from "../Componets/BackButton";
import Logo from "../Componets/Logo";
import Header from "../Componets/Header";
import TextInput from "../Componets/TextInput";
import Button from "../Componets/Button";
import { emailValidator } from "../helpers/emailValidator";
import { sendEmailWithPassword } from "../api/auth-api";
import Toast from "../Componets/Toast";

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ value: "", type: "" });

  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    setLoading(true);
    const response = await sendEmailWithPassword(email.value);
    if (response.error) {
      setToast({ type: "error", message: response.error });
    } else {
      setToast({
        type: "success",
        message: "Email with password has been sent.",
      });
    }
    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        loading={loading}
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
      <Toast {...toast} onDismiss={() => setToast({ value: "", type: "" })} />
    </Background>
  );
}

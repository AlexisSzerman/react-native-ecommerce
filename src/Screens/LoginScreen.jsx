import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/Theme";
import { useSignInMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation();
    const onSubmit = () => {

        //Submit logic with validations
        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true,
            });
        }

        if (!isValidVariableEmail) setErrorEmail ('Email is not correct')
        else setErrorEmail('')
        if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
        else setErrorPassword('')
    };

    console.log(resultSignIn);
    useEffect(()=> {
        if(resultSignIn.isSuccess) {
            dispatch(setUser({
                email: resultSignIn.data.email,
                idToken: resultSignIn.data.idToken
            }))
        }
    }, [resultSignIn])

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to start</Text>
        <InputForm
          label={"email"}
          onChange={setEmail}
          error={errorEmail}
        />
        <InputForm
          label={"password"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Send" />
        <Text style={styles.sub}>Not have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.navy,
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.teal,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
    borderColor: colors.blue,
    borderWidth: 2,
  },
  title: {
    fontSize: 22,
    fontFamily: "LilitaOne",
    color: colors.orange,
  },
  sub: {
    fontSize: 14,
    fontFamily: "Raleway",
    color: colors.orange,
  },
  subLink: {
    fontSize: 14,
    color: colors.navy,
    fontFamily: "Raleway",
  },
});

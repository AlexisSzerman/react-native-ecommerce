import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/Theme";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { useSignUpMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";


const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [triggerSignUp, result] = useSignUpMutation() 
   
    console.log(result);
    const dispatch = useDispatch()
 
    useEffect(()=> {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            //Submit logic with validations
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
            const isRepeatedPasswordCorrect = password === confirmPassword

            if (isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignUp(request)
            }

            if (!isValidVariableEmail) setErrorMail ('Email is not correct')
            else setErrorMail('')
            if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
            else setErrorPassword('')
            if (!isRepeatedPasswordCorrect) setErrorConfirmPassword ('Passwords must match')
            else setErrorConfirmPassword('')

        } catch (err) {
            console.log("Catch error");
            console.log(err.message);
        }
    }; 

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm 
                    label={"email"} 
                    onChange={setEmail} 
                    error={errorMail}
                />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirm password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignupScreen;

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
        borderWidth: 2
    },
    title: {
        fontSize: 22,
        fontFamily: 'LilitaOne',
        color: colors.orange,
    },
    sub: {
        fontSize: 14,
        fontFamily: "Raleway",
        color: colors.orange,
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Raleway",
        color: colors.navy,
    },
});


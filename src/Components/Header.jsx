import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/Theme";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Features/User/userSlice";

const Header = ({ route, navigation }) => {
  let title;
  if (route.name === "Home") title = "Home";
  if (route.name === "CartScreen") title = "Cart";
  else if (route.name === "ItemListCategory") title = route.params.category;
  else if (route.name === "ItemDetail") title = route.params.title;
  else title = route.name;
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.userReducer.value);

  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerText}>{title}</Text>
      {navigation.canGoBack() ? (
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="back" size={20} color={colors.orange} />
        </Pressable>
      ) : null}
      {email ? (
        <Pressable
          style={styles.pressableLogOut}
          onPress={() => dispatch(signOut())}
        >
          <MaterialCommunityIcons
            name="logout"
            size={28}
            color={colors.orange}
          />
          <Text style={styles.pressableLogOutText}>Log Out</Text>
        </Pressable>
      ) : null}
    </View>
  );
};


export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 33,
    color: colors.orange,
    fontFamily: "LilitaOne",
  },
  pressable: {
    position: "absolute",
    left: 20,
    top: "50%",
    borderColor: colors.orange,
    borderRadius: 20,
    borderWidth: 2,
    padding: 5,
    backgroundColor: colors.navy,
  },
  pressableLogOut: {
    position: "absolute",
    right: 20,
    top: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  pressableLogOutText:{ 
    color:colors.orange
  }
});

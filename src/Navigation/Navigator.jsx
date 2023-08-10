import { SafeAreaView, StyleSheet, View, Text, Platform } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";
import AuthStack from "./AuthStack";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../Global/Theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Navigator = () => {

  const {email} = useSelector(state => state.userReducer.value)
return (
  <SafeAreaView style = {styles.container}>
      <NavigationContainer>
          {
              email ? 
         <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={styles.tabContainer}>
                    <MaterialCommunityIcons
                      name="home"
                      size={30}
                      color={focused ? colors.orange : colors.blue}
                    />
                     <Text style={[styles.tabText, { color: focused ? colors.orange : colors.blue }]}>
                      Home</Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrderStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={styles.tabContainer}>
                    <FontAwesome5
                      name="list-ul"
                      size={30}
                      color={focused ? colors.orange : colors.blue}
                    />
                    <Text style={[styles.tabText, { color: focused ? colors.orange : colors.blue }]}>
                      Orders</Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={styles.tabContainer}>
                    <MaterialCommunityIcons
                      name="cart"
                      size={30}
                      color={focused ? colors.orange : colors.blue}
                    />
                    <Text style={[styles.tabText, { color: focused ? colors.orange : colors.blue }]}>
                      Cart</Text>
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator> 
        : <AuthStack/>
        }
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tabBar: {
    backgroundColor: colors.navy,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopWidth: 2,
    borderTopColor: colors.blue,
    height: 60,
  },
  tabText:{
    color: colors.orange
  
  },
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", 
  }
});

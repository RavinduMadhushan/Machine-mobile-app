/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/login";
import HomeScreen from "./src/screens/home";
import AuthLoadingScreen from "./src/screens/auth";

import BreakdownScreen from "./src/screens/breakdown";
import QRScreen from "./src/screens/qrdata";

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Breakdown: BreakdownScreen,
  QR: QRScreen
});

const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

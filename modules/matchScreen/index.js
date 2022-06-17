import React, { useRef, useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { OptionsContext, GlobalOptionsContext } from "@options";

const facebookImage = "https://flyclipart.com/facebook-facebook-button-facebook-logo-logo-icon-white-facebook-icon-png-466332"

const MatchScreen = () => {
  const options = useContext(OptionsContext);
  const { styles, buttonText } = options;

  return (
    <View style={styles.container}>
        <Text style={styles.matchText}>It's a match</Text>
        <Text style={styles.matchSubText}>Discover new and interesting people nearby</Text>
        <TouchableOpacity style={styles.startConversationButton}>
          <Text style={styles.startConversationText}>Start a conversation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.connectText}>Connect</Text>
          <Image 
            source={{ uri: "https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png"}} 
            style={styles.buttonImage}>
          </Image>
        </TouchableOpacity>
    </View>
  )
};

export default {
  title: "Match Screen",
  navigator: MatchScreen
};



import React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "@/widgets/EditScreenInfo";
import { Text, View } from "@/widgets/Themed";

export default function TabOneScreen() {
   return (
      <View style={ styles.container }>
         <Text style={styles.title}>Tab One</Text>
         <View style={styles.separator} lightColor="#eee" darkColor="#27f" />
         <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
   },
   separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
   },
});

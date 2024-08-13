

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/widgets/useColorScheme';
import { useClientOnlyValue } from '@/widgets/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon( props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
} ) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
   const colorScheme = useColorScheme();

   return (
      <Tabs 
      screenOptions={ { tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      // Disable the static render of the header on web
      // to prevent a hydration error in React Navigation v6.
      tabBarStyle: { backgroundColor: "#1b1d22", borderTopColor: "#0005", },
      headerShown: useClientOnlyValue(false, true),
      headerStyle: { backgroundColor: "#16181c", borderBottomColor: "#0005", },
      headerShadowVisible: true,
      headerTintColor: "#27f",
      headerTitle: "Céo",
      headerTitleAlign: "center",
      } }>



         <Tabs.Screen
         name="index"
         options={ {
            title: "Home",
            // tabBarIcon: ( { color } ) => <TabBarIcon name="broadcast-on-home" color={ color } />,
            tabBarIcon: ( { color } ) => <MaterialIcons name="broadcast-on-home" size={24} color="#888" />,
            headerRight: () => (
               <Link href="/modal" asChild>
                  <Pressable onPress={ () => alert( "oi" ) }>
                     { ( { pressed } ) => (
                        <FontAwesome
                        name="info-circle"
                        size={25}
                        // color={ Colors[colorScheme ?? 'light'].text }
                        color="#fc0"
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                     ) }
                  </Pressable>
               </Link>
            ),
            headerLeft: () => (
               <Pressable style={{ marginLeft: 16, backgroundColor: "#27f", borderRadius: 240, width: 25, aspectRatio: 1,
                  alignItems: "center", justifyContent: "center",
               }}>
                  <Text style={{ fontWeight: "bold", fontSize: 18, }}>oi</Text>
               </Pressable>
            ),
         } }
         />



         <Tabs.Screen
         name="two"
         options={ {
            title: 'Tab Two',
            tabBarIcon: ( { color, focused } ) => {
               if( focused ) {
                  return <TabBarIcon name="code" color={ color = "#27f" } />
               } else {
                  return <TabBarIcon name="sticky-note-o" color={ color = "#888" } />
               }
            },
            tabBarBackground: () => <View style={{ backgroundColor: "#27f", width: 50, height: 50 }}/>
         } }
         />



         <Tabs.Screen
         name="settingsView"
         options={ {
            title: "Settings",
            tabBarIcon: ( { color } ) => <TabBarIcon name="cog" color={ color = "#955" } />,
         } }
         />
      </Tabs>
  );
}

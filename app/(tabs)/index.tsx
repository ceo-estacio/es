

/** == [ @imports ] 
 * == == == == == == == == == */
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text, 
} from "react-native";

import { Page, } from "@/widgets/ui";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function HomeView( { ...props } ) {


   return( <>
      <Page>
         <Text style={{ color: "#eee", fontWeight: "bold", }}>Home</Text>
      </Page>
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
         backgroundColor: "#27f0",
      },
   } )
;


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
export default function TwoView( { ...props } ) {


   return( <>
      <Page>
         <Text style={{ color: "#eee", fontWeight: "bold", }}>Two</Text>
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
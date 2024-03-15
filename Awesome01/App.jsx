import React from "react";
import FlatCard from "./component/FlatCard";
import ElevatedCard from "./component/ElevatedCard";
import FancyCard from "./component/FancyCard";
import ActionCard from "./component/ActionCard";
import ContactList from "./component/ContactList";
import {
  SafeAreaView,
  ScrollView
} from 'react-native'
function App(){
  return(
   <SafeAreaView>
    <ScrollView>
      <FlatCard/>
      <ElevatedCard/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
    </ScrollView>
   </SafeAreaView>
  )
 
}
export default App;

import React from "react";

import {View, Text} from 'react-native';
import Flatlist from "./Component/FlatList";
import AllFlatList from "./Component/FlatList";
import HorizontalList from "./Component/HorizontalList";
import NestedList from "./Component/NestedList";
import ExpandedList from "./Component/ExpandedList";
import MultiView from "./Component/MultiView";
import GridView from "./Component/GridView";
import MyRecyclerListView from "./Component/RecyclerView";
import Home from "./Component/Home";
import Test from "./Component/Test";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();


function App(){
  return(
    
      <QueryClientProvider client={queryClient}>
        <Flatlist />
      </QueryClientProvider>
  
  )
}
export default App;
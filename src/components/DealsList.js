import React from 'react'
import {View, StyleSheet,FlatList} from "react-native"
import DealItem from './DealItem'


function DealsList({deals,onItemPress}) {
  return (
    <View style={styles.list}>
        <FlatList
        data={deals}
        renderItem={({item}) => <DealItem deal={item} onItemPress={onItemPress}/>}
        keyExtractor={item => item.key}
        
      />
    </View>
  )
}



const styles = StyleSheet.create({
    list:{
        backgroundColor:"#eee",
        flex:1,
        width:"100%"
    }
})



export default DealsList


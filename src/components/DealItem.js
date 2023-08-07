import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { priceDisplay } from "../utils/utils";

function DealItem({ deal,onItemPress}) {
  
  return (
    <View style={styles.dealcard}>
     <TouchableOpacity onPress={()=>onItemPress(deal.key)}>
      <Image source={{ uri: deal.media[0] }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{deal.title}</Text>
        <View style={styles.info}>
        <Text>{deal.cause.name}</Text>
        <Text>{priceDisplay(deal.price)}</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dealcard:{
    marginVertical:10,
    marginHorizontal:9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 8,
    borderWidth: 0.4,
    borderStyle: 'solid', 
    borderColor: 'black',
    paddingBottom:30,
    backgroundColor:"white"
  },

  details:{
    paddingHorizontal:12,
    paddingTop:9
  },
  image: {
    width: "100%",
    height: 150,
    borderTopRightRadius:8,
    borderTopLeftRadius:8
  },

  title:{
    fontSize:17,
    fontWeight:"700"
  },

  info:{
    paddingVertical:10,
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

export default DealItem;

import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { priceDisplay } from "../utils/utils";
import ajax from "../ajax";
import Icon from "react-native-vector-icons/FontAwesome";

function DealDetail({ deal, onItemPress }) {
  const [dealdetails, setDealDetails] = useState("");

  useEffect(() => {
    const fetchDealDetail = async () => {
      try {
        const dealdetails = await ajax.fetchDealDetail(deal.key);
        setDealDetails(dealdetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDealDetail();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => onItemPress(null)}>
        <View style={styles.backbutton}>
          <Icon name={"arrow-left"} />
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.dealcard}>
        <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text style={styles.title}>{deal.title}</Text>
          </View>

          {dealdetails && (
            <View>
              <View style={styles.user}>
                <View style={styles.meta}>
                  <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                  <Text style={styles.cause}>{deal.cause.name}</Text>
                </View>

                <View style={styles.author}>
                  <Image
                    source={{ uri: dealdetails.user.avatar }}
                    style={styles.avatar}
                  />
                  <Text style={styles.authorName}>{dealdetails.user.name}</Text>
                </View>
              </View>

              <View style={styles.description}>
                <Text>{dealdetails.description}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    marginVertical: 10,
  },
  dealcard: {
    marginHorizontal: 5,
    paddingBottom: 30,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  details: {
    paddingTop: 9,
    marginHorizontal: 9,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
  },

  detailsContainer: {
    paddingBottom: 40,
    paddingHorizontal: 5,
  },

  user: {
    marginHorizontal: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },

  author: {
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
  },

  meta: {
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
  },

  price: {
    fontSize: 22,
    fontWeight: "600",
  },

  cause: {
    fontSize: 17,
  },

  authorName: {
    fontSize: 17,
    textAlign: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },

  description: {
    paddingHorizontal: 10,
    fontSize: 20,
  },

  backbutton:{
    flexDirection:"row",
    gap:4,
    marginLeft:9,
    paddingVertical:10
  }
});

export default DealDetail;

import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

const [listing, setListings] = useState([]);
//state varibles

useEffect(() => {
  loadListings();
}, []);

// Fetching the data from listingsAPI
const loadListings = async () => {
  const response = await listingsApi.getListings();
  setListings(response.data);
};

function ListingsScreen({ navigation }) {
  return (
    <Screen>
      <FlatList
        style={styles.screen}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"£" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

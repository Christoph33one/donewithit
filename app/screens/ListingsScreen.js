import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Button from "../components/AppButton";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);

    // error handling fetching data
    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Could'nt retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        style={styles.screen}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"£" + item.price}
            imageUrl={item.images[0].url}
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

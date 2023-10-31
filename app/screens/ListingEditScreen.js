import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CatergoryPickerItem from "../components/CatergoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsAPI from "../api/listings";
import useLocation from "../hooks/useLocation";

// Form validation / Yup is used for form validation
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

// List of category items in drop down menu
const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#6908F5",
    icon: "book",
  },
  {
    label: "other",
    value: 9,
    backgroundColor: "#BCB8BA",
    icon: "book",
  },
];

function ListingEditScreen() {
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsAPI.addListing(
      { ...listing, location },
      (process) => console.log(process)
    );
    if (!result.ok) return alert("Could not save the listing.");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColums={3}
          PickerItemComponent={CatergoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;

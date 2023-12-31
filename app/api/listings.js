import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

// Post data to the sever using FormData object
const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  // Iterate over images in array
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: " image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  // Check if each listing has a location
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  //  Post to Listings endpoint and data
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};

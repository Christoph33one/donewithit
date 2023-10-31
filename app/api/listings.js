import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

// Post data to the sever using FormData object
const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryID", listing.category.value);
  data.append("description", listing.descrition);

  // Iterate over images in array
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: " image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  // Check if each listing as a location
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  //  Post to Listings endpoint and data
  return client.post(endpoint, data, {
    onUploadProgress: (process) =>
      onUploadProgress(process.loaded / process.total),
  });
};

export default {
  addListing,
  getListings,
};

const typeDefinitions = `
type Item {
    _id: ID
    name: String
    price: Number
    salePrice: Number
    thumbnail: String
    photos: [Photo]
}

input ItemInput {
    name: String
    price: String
    salePrice: Number
    thumbnail: String
}

type Photo {
    _id: ID,
    url: String,
    mainPhoto: Boolean
}

input PhotoInput {
  url: String
  mainPhoto: Boolean
}

type RootQuery {
  item(id: ID!): Item
  items: [Item]
  photo(id: ID!): Photo
  photos: [Photo]
}

type RootMutation {
  createItem(input: itemInput!): Item
  updateItem(id: ID!, input: itemInput!): Item
  removeItem(id: ID!): Item
  createPhoto(input: PhotoInput!): Photo
  updatePhoto(id: ID!, input: PhotoInput!): Photo
  removePhoto(id: ID!): Photo
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;
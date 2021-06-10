const { gql } = require('apollo-server-express');

const typeDefinitions = gql`
type Item {
    _id: ID
    name: String
    price: Float
    salePrice: Float
    thumbnail: String
    photos: [Photo]
}

input ItemInput {
    name: String
    price: Float
    salePrice: Float
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
  createItem(input: ItemInput!): Item
  updateItem(id: ID!, input: ItemInput!): Item
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

module.exports =  typeDefinitions;
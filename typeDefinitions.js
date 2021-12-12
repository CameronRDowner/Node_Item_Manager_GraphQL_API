const { gql } = require('apollo-server-express');

const typeDefinitions = gql`
type Item {
    _id: ID
    name: String
    price: Float
    salePrice: Float
    thumbnail: String
}

input ItemInput {
    name: String
    price: Float
    salePrice: Float
    thumbnail: String
}

type RootQuery {
  item(id: ID!): Item
  items: [Item]
}

type RootMutation {
  createItem(input: ItemInput!): Item
  updateItem(id: ID!, input: ItemInput!): Item
  deleteItem(id: ID!): Item
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

module.exports =  typeDefinitions;
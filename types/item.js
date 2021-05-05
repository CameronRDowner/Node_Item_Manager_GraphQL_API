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
    photos: [Photo]
}

type Photo {
    url: String,
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
  createProject(input: ProjectInput!): Project
  updateProject(id: ID!, input: ProjectInput!): Project
  removeProject(id: ID!): Project
  createTask(input: TaskInput!): Task
  updateTask(id: ID!, input: TaskInput!): Task
  removeTask(id: ID!): Task
}
# We need to tell the server which types represent the root query.
# We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;
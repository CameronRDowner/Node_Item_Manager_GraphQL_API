const Item = require("./models/item");
module.exports = resolvers = {
  RootQuery: {
    item: async (_, { id }) => {
      return await Item.findById(id);
    },
    items: async () => {
      return await Item.find();
    },
  },
  RootMutation: {
    createItem: async (_, { input }) => {
      return await Item.create(input);
    },
    updateItem: async (_, { id, input }) => {
      return await Item.findByIdAndUpdate(id, input);
    },
    deleteItem: async (_, { id }) => {
      return await Item.findByIdAndDelete(id);
    },
  },
};

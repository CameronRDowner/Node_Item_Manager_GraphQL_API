const Item = require('./models/item');
module.exports = resolvers = {
    RootQuery: {
      item (root, { id }) {
        return Item.findById(id);
      },
      items: () => {
        return Item.find();
      },
      photo (root, { id }, context) {
        return 
      }
    },
    RootMutation: {
      createItem (_, {input}) {
        return Item.create(input)
      }
    }
}


  
module.exports = function resolvers () {
    const Item = require('./models/item');

  return {
    RootQuery: {
      item (root, { id }, context) {
        return Item.findById(id);
      },
      items (root, args, context) {
        return Item.find();
      },
      photo (root, { id }, context) {
        return 
      }
    },
    RootMutation: {

    }
  };
}
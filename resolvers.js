const Item = require('./models/item');
module.exports = resolvers = {
    RootQuery: {
      item (root, { id }, context) {
        return Item.findById(id);
      },
      items: (root, args, context) => {
        //return Item.find();
        return new Array()''
      },
      photo (root, { id }, context) {
        return 
      }
    },
    RootMutation: {
      createItem (_, {input}, {headers}) {
        console.log(input)
        return input
      }
    }
}


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

// Create a new store schema
const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // This is a built-in method on the model
    required: 'Please enter a store name', // This is a "truthy" error message that will appear if no store name is given
    },
  slug: String,
  description: {
    type: String,
    trim: true
    },
  tags: [String] // This is an Array because we will want to pass multiple Strings
});

storeSchema.pre('save', function(next) {
  if(!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name); // 'this' will be equal to the store that we are trying to save
  next();

  // TODO make more resilient so slugs are unique
})

module.exports = mongoose.model('Store', storeSchema);

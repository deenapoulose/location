const mongoose = require("mongoose");
/* create location collection in the db */
const locschema= mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latitude:{
      type:Number,
      required:true,

  },
  longitude:{
    type:Number,
    required:true,

},

  location: {
    coordinates: {
      type: [Number],
    },
    type: {
      type: String,
      default: "Point",
    },
  },

  image: { type: String, required: true },
  category: {
    type: String,
    required: true,
  },
});



module.exports = mongoose.model("loc",locschema);
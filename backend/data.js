const bcrypt = require('bcryptjs');
/* dumy data for users */
const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@123gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    }
   
  ],
  /* dumy data for locations */
  place: [
    {
        name: "Polo Grounds",
        location: { type: "Point", coordinates: [ -73.9375, 40.8303 ] },
        latitude:-73.9375,
        longitude:40.8303,
        image:'/images/l1.jpg',
        category: "Stadiums"
     },
     {
        name: "Sara D. Roosevelt Park",
        location: { type: "Point", coordinates: [ -73.9928, 40.7193 ] },
        latitude:-73.9928,
        longitude:40.7193,
        image:'/images/l2.jpg',
        category: "Parks"
     },
     {
        name: "Central Park",
       location: { type: "Point", coordinates: [ -73.97, 40.77 ] },
       latitude:-73.97,
       longitude:40.77,
       image:'/images/l3.jpg',
       category: "Parks"
    } 


],
};
module.exports=data;

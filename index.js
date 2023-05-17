const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
let restaurants = [{ 
  name: "Uchi",
  style: "Asian",
  price: "$$$$" }];
console.log(restaurants);
// Routes go here
app.post("/restaurant_add", (req, res) => {
  const newRestaurant = req.body;
  restaurants.push(newRestaurant);
  res.send(restaurants);
  console.log(restaurants);
});

app.put("/restaurant_update", (req, res) => {
  const restaurantToUpdate = req.body;
  restaurants.splice(i, 1, restaurantToUpdate);
  res.send(restaurants);
  console.log(restaurants);
});

app.post("/restaurant_delete", (req, res) => {
  const filteredRestaurants = restaurants.filter(
    (resta) => resta.name !== req.body.name
  );
  restaurants = filteredRestaurants;
  res.send(restaurants);
  console.log(restaurants);
});

app.get("/restaurant_get", (req, res) => {
  res.json(restaurants);
  console.log(restaurants);
}); 


// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

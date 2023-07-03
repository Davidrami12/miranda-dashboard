import bookings from "../data/bookings.json";
import rooms from "../data/rooms.json";
import users from "../data/users.json";
import reviews from "../data/reviews.json";

export const fetchData = (query) => {
  switch (query) {
    case "Bookings":
      return bookings;
    case "Rooms":
      return rooms;
    case "Users":
      return users;
    case "Reviews":
      return reviews;
    default:
      console.log("Sorry, no data found");
  }
};
import { getAvailableRooms, findRoom, bookRoom } from "./booking.js";

console.log("Доступні номери:");
console.log(getAvailableRooms());

console.log("\nПошук номера id = 2:");
console.log(findRoom(2));

console.log("\nБронювання:");
console.log("bookRoom(1, 3):", bookRoom(1, 3));
console.log("bookRoom(2, 5):", bookRoom(2, 5));
console.log("bookRoom(3, 2):", bookRoom(3, 2));

console.log("\nДоступні номери після бронювання:");
console.log(getAvailableRooms());

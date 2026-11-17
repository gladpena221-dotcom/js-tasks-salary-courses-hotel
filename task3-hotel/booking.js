import { rooms } from "./rooms.js";

const LONG_STAY_NIGHTS = 5;
const LONG_STAY_DISCOUNT = 0.15;

export function getAvailableRooms() {
  return rooms.filter((room) => room.available);
}

export function findRoom(id) {
  return rooms.find((room) => room.id === id);
}

export function bookRoom(id, nights) {
  const room = findRoom(id);

  if (!room) {
    return "Номер не знайдено";
  }

  if (!room.available) {
    return "Номер недоступний";
  }

  if (nights <= 0) {
    return "Кількість ночей має бути більшою за 0";
  }

  let total = room.price * nights;
  if (nights >= LONG_STAY_NIGHTS) {
    total *= 1 - LONG_STAY_DISCOUNT;
  }

  room.available = false;
  return `${total} грн`;
}

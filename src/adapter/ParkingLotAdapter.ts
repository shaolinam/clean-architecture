import ParkingLot from "../core/entities/ParkingLot";

export default class ParkingLotAdapter {
  static create(code: string, capacity: number, openHour: string, closeHour: string, occupiedSpaces: number) {
    return new ParkingLot(code, capacity, openHour, closeHour, occupiedSpaces);
  }
}
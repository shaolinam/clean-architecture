import Util from "../util/util"
export default class ParkingLot {
  code: string;
  capacity: number;
  openHour: string;
  closeHour: string;
  occupiedSpaces: number;

  constructor(code: string, capacity: number, openHour: string, closeHour: string, occupiedSpaces: number) {
    this.code = code;
    this.capacity = capacity;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.occupiedSpaces = occupiedSpaces;
  }

  isOpen(date: Date) {
    const hour = Util.horaFmtAtual();
    return (hour >= this.openHour && hour <= this.closeHour);
  }

  isFull() {
    return (this.capacity === this.occupiedSpaces)
  }
}
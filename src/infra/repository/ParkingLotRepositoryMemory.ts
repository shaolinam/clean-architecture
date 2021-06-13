import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entities/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
  
  parkingLots = [
    { code: "Shopping", capacity: 5, open_Hour: 8 , close_Hour: 22 }
  ];
  parkedCars = [];
  
  getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = this.parkingLots.find(p => p.code === code)
    const occupiedSpaces = this.parkedCars.length;
    const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_Hour, parkingLotData.close_Hour, occupiedSpaces);
    return Promise.resolve(parkingLot);
  }; 
  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, plate, date });
  };
}
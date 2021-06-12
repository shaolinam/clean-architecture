import ParkingLot from "../../core/entities/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
  getParkingLot(code: string): Promise<ParkingLot> {
    return Promise.resolve(new ParkingLot(code, 5, 8 , 22));
    // throw new Error("Method not implemented");
  };
}
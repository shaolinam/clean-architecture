import ParkingLot from "../entities/ParkingLot";

export default interface ParkingLotRepository {
  getParkingLot(code: string) : Promise<ParkingLot>;
}
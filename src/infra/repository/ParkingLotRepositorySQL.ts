import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entities/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from "../database/database"

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = await database.oneOrNone("select *, (select count(*) from parkedcar p2 where p2.code = p1.code)::int as occupied_spaces from parkinglot p1 where code=$1", [code]);
    return ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, parkingLotData.occupied_spaces);
  }
  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    await database.none("insert into parkedcar (code, plate, date_parked) values ($1, $2, $3)", [code, plate, date]);
  }
  
}
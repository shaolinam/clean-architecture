import GetParkingLot from "../core/usecase/GetParkingLot";
import ParkingLotRepositorySQL from "../infra/repository/ParkingLotRepositorySQL";

export default class ParkingLotController {
  static async getParkingLot(params, body) {
  const parkingLotRepository = new ParkingLotRepositorySQL()
  const getParkingLot = new GetParkingLot(parkingLotRepository);
  const parkingLotData = await getParkingLot.execute(params.code);
  return parkingLotData;
  }
}
import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import ParkingLotRepositoryMemory from '../src/infra/repository/ParkingLotRepositoryMemory'

test("Should enter parkink lot", async function() {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory)
  const parkingLot = await enterParkingLot.execute("Shopping");
  expect(parkingLot.code).toBe("Shopping");
})
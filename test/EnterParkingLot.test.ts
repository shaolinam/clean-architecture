import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import ParkingLotRepositoryMemory from '../src/infra/repository/ParkingLotRepositoryMemory'
import GetParkingLot from '../src/core/usecase/GetParkingLot'

test("Should enter parkink lot", async function() {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  const parkingLotBeforeEnter = await getParkingLot.execute("Shopping");
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
  await enterParkingLot.execute("Shopping", "MMM-0001", new Date("2021-06-01T10:00:00"));
  const parkingLotAfterEnter = await getParkingLot.execute("Shopping");
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});

test.skip("Should be closed", async function() {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  const parkingLotBeforeEnter = await getParkingLot.execute("Shopping");
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
  await enterParkingLot.execute("Shopping", "MMM-0001", new Date("2021-06-01T23:00:00"));
});
test.skip("Should be full", async function() {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  const parkingLotBeforeEnter = await getParkingLot.execute("Shopping");
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
  await enterParkingLot.execute("Shopping", "MMM-0001", new Date("2021-06-01T10:00:00"));
  await enterParkingLot.execute("Shopping", "MMM-0002", new Date("2021-06-01T10:00:00"));
  await enterParkingLot.execute("Shopping", "MMM-0003", new Date("2021-06-01T10:00:00"));
  await enterParkingLot.execute("Shopping", "MMM-0004", new Date("2021-06-01T10:00:00"));
  await enterParkingLot.execute("Shopping", "MMM-0005", new Date("2021-06-01T10:00:00"));
  await enterParkingLot.execute("Shopping", "MMM-0006", new Date("2021-06-01T10:00:00"));
});
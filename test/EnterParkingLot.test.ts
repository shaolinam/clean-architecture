import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import ParkingLotRepositoryMemory from '../src/infra/repository/ParkingLotRepositoryMemory'
import GetParkingLot from '../src/core/usecase/GetParkingLot'
import ParkingLotRepositorySQL from "../src/infra/repository/ParkingLotRepositorySQL";

test.skip("Should get parkink lot", async function() {
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
  const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
  const parkingLot = await getParkingLot.execute("Shopping");
  expect(parkingLot.code).toBe("Shopping");
  await enterParkingLot.execute("Shopping", "MMM-0001", new Date("2021-06-01T10:00:00"));
  const parkingLotAfterEnter = await getParkingLot.execute("Shopping");
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});
test("Should enter parkink lot", async function() {
  // const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  // const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  // const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
  const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
  const parkingLotBeforeEnter = await getParkingLot.execute("Shopping");
  // console.log("ParkingLot: ", parkingLotBeforeEnter);
  // console.log("OccupiedSpaces: ", parkingLotBeforeEnter.occupiedSpaces);
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
  await enterParkingLot.execute("Shopping", "MMM-0001", new Date("2021-06-01T10:00:00"));
  const parkingLotAfterEnter = await getParkingLot.execute("Shopping");
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});

test.skip("Should be closed", async function() {
  // const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
  const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
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
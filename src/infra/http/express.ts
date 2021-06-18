import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";

// import GetParkingLot from '../../core/usecase/GetParkingLot'
// import ParkingLotRepositorySQL from "../repository/ParkingLotRepositorySQL";

const app = new Express();


// app.get("/parkinglot/:code", async function (req, res) {
//   const parkingLotRepository = new ParkingLotRepositorySQL()
//   const getParkingLot = new GetParkingLot(parkingLotRepository);
//   const parkingLotData = await getParkingLot.execute(req.params.code);
//   res.json(parkingLotData);
// });

app.get("/parkinglot/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));

app.listen(3000);

import Hapi from "@hapi/hapi";
import HapiAdapter from "../../adapter/HapiAdapter";
import ParkingLotController from "../../controller/ParkingLotController";

const init = async () => {

  const server = Hapi.server({
      port: 3000,
      host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World Hapi!';
    }
  });

  server.route({
    method: 'GET',
    path: '/parkinglot/{code}',
    handler: HapiAdapter.create(ParkingLotController.getParkingLot)
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
-- Creation of Parking Lot table
CREATE TABLE IF NOT EXISTS parkinglot (
  code varchar(100) NOT NULL PRIMARY KEY,
  capacity  INT NOT NULL,
  open_hour  TIME NOT NULL,
  close_hour  TIME NOT NULL
);

-- Creation of ParkedCar table
CREATE TABLE IF NOT EXISTS parkedcar (
  code varchar(100) NOT NULL,
  plate varchar(10) NOT NULL,
  date_parked timestamp NOT NULL,
  CONSTRAINT fk_parkinglot FOREIGN KEY (code) REFERENCES parkinglot(code)
);
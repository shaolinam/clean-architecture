import pgPromise from "pg-promise";

const pgp = pgPromise({});

// Configuracoes alinhadas com o container Docker (docker-compose.yml)
const db = pgp({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5438, // port of docker
  database: "postgres",
  idleTimeoutMillis: 100
});

export default db;

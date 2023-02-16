module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        database: process.env.PGDATABASE,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        ssl: env.bool(true),
      },
      // connection: {
      //   host: env("PGHOST", "127.0.0.1"),
      //   port: env.int("PGPORT", 5432),
      //   database: env("PGDATABASE", "strapi"),
      //   user: env("PGUSER", "strapi"),
      //   password: env("PGPASSWORD", "password"),
      //   ssl: env.bool(true),
      // },
    },
  };
};

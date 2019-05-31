import pgPromise from "pg-promise";

export const pgp = pgPromise();

const devURL = "postgres://tourdb_admin:postgres@localhost:5433/tourdb";

export const db = pgp(process.env.DATABASE_URL || devURL);
import pgPromise from 'pg-promise';

export const pgp = pgPromise();

const prodDbUrl: any = process.env.PROD_DB_URL;

export const db = pgp(prodDbUrl);

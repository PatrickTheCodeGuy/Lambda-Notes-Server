const localPg = {
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
};

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/notedb.sqlite3"
		},
		useNullAsDefault: true,
		migrations: {
			tableName: "knex_migrations",
			directory: "./data/migrations"
		},
		seeds: {
			directory: "./data/data/seeds"
		}
	},
	production: {
		client: "pg",
		connection: dbConnection,
		pool: {
			min: 2,
			max: 10
		},
		useNullAsDefault: true,
		migrations: {
			tableName: "knex_migrations",
			directory: "./data/data/migrations"
		},
		seeds: {
			directory: "./data/data/seeds"
		}
	}
};

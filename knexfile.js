const dbConnection = process.env.DATABASE_URL;

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/notedb.sqlite3"
		},
		useNullAsDefault: true
	},
	production: {
		client: "pg",
		connection: dbConnection,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations",
			directory: "./data/migrations"
		}
	}
};

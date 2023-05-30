import mssql from 'mssql'

try {
	const sqlConfig = {
			user: 'usuario',
			password: '123456',
			database: 'TP2',
			server: 'localhost',
			port: 3306,
			pool: {
				max: 10,
				min: 0,
				idleTimeoutMillis: 30000
			},
			options: {
				encrypt: true,
				trustServerCertificate: true // change to true for local dev / self-signed certs
			}
		}
		await mssql.connect(sqlConfig);
		const result = await mssql.query`select * from PERSONAS`
		console.log(result.recordset)
} catch (err) {
		console.log(err.message);
}

export default mssql
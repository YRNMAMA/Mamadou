import { pool } from "./dbSession.js";
import { catchAsync } from "../utils/errorHandler.js";

export const retrieveHealthStatusFn = catchAsync(async (req, res) => {
	await pool.query('SELECT 1');
	res.status(200).json({
		status: 'success',
		data: {
			service: 'UP',
			database: 'CONNECTED',
			uptime: process.uptime()
		}
	});
});

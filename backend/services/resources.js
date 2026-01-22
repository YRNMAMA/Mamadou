import {pool} from "./dbSession.js";

// --- HELPERS ---
const handleError = (res, err) => {
	console.error(err);
	res.status(500).json({ error: err.message });
};

/**
 * GET /resources/triage-colors
 * Restituisce i colori con proprietà in camelCase.
 */
export const retrieveTriageColorsFn = async (req, res) => {
	try {
		const query = `
            SELECT 
                code, 
                display_name AS "displayName", 
                priority, 
                hex_value AS "hexValue" 
            FROM triage_colors 
            ORDER BY priority
        `;
		const result = await pool.query(query);
		res.json(result.rows);
	} catch (err) {
		handleError(res, err);
	}
};

/**
 * GET /resources/pathologies
 * Restituisce l'elenco delle patologie codificate.
 */
export const retrievePathologiesFn = async (req, res) => {
	try {
		const query = `
            SELECT 
                code, 
                description 
            FROM pathologies 
            ORDER BY code
        `;
		const result = await pool.query(query);
		res.json(result.rows);
	} catch (err) {
		handleError(res, err);
	}
};

/**
 * GET /resources/arrival-modes
 * Restituisce l'elenco delle modalità di arrivo.
 */
export const retrieveArrivalModesFn = async (req, res) => {
	try {
		const query = `
            SELECT 
                code, 
                description 
            FROM arrival_modes 
            ORDER BY code
        `;
		const result = await pool.query(query);
		res.json(result.rows);
	} catch (err) {
		handleError(res, err);
	}
};

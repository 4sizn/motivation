import axios from "axios";

export const getQouteList = async (limit = 1, offset = 0) => {
	return await axios.get(
		"https://3ae6c995-f72f-48bd-915d-a2ecdbce778f.mock.pstmn.io/quote?limit=1&offset=1"
	);
};

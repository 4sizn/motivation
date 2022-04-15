import axios from "axios";

export const getQuoteList = async (limit = 1, offset = 0) => {
	const { data } = await axios.get("http://localhost:3001/quoteList");
	return data;
};

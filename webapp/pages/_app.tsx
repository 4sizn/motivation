import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/carousel.css";
import "../styles/ripple.css";
import type { AppProps } from "next/app";
import { useLayoutEffect } from "react";
import initialize from "../services/drakMode";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
// import { customLog } from "@4sizn/customlog-web";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	useLayoutEffect(() => {
		// customLog.init();
		initialize();
	}, []);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={true} />
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
}

export default MyApp;

import "../styles/globals.css";
import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/carousel.css";
import "../styles/ripple.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import initialize from "../services/drakMode";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { customLog } from "@4sizn/customlog-web";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 1000 * 60 * 60 * 24, // 24 hours
		},
	},
});

function persistInitialize() {
	const localStoragePersistor = createWebStoragePersistor({
		storage: window.localStorage,
	});

	persistQueryClient({
		queryClient,
		persistor: localStoragePersistor,
	});
}

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		customLog.init({
			timestamp: true,
		});
		initialize();
		persistInitialize();
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

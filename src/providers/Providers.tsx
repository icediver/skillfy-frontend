'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store/store';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export function Providers({ children }: { children: ReactNode }) {
	// const [client] = useState(new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{children}
				</PersistGate>
			</ReduxProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

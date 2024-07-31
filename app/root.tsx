import { NextUIProvider } from '@nextui-org/react'
import { LinksFunction } from '@remix-run/node'
import {
	Meta,
	Links,
	ScrollRestoration,
	Scripts,
	Outlet,
} from '@remix-run/react'

import styles from './tailwind.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<NextUIProvider>
					{children}
					<ScrollRestoration />
					<Scripts />
				</NextUIProvider>
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}

export function HydrateFallback() {
	return <p>Loading...</p>
}

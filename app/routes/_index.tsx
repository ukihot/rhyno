import { Button } from '@nextui-org/button'
import { Link } from '@remix-run/react'

import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix SPA' },
		{ name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
	]
}

export default function Index() {
	return (
		<div className="font-sans p-4">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button>
				<Link to="/login">Login</Link>
			</Button>
			<Button
				radius="full"
				className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
			>
				Button
			</Button>
		</div>
	)
}

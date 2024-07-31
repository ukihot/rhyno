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
			<h1 className="text-3xl font-bold underline">Login Done</h1>
		</div>
	)
}

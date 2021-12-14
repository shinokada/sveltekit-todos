<script context="module">
	// export async function load(ctx) {
	// 	let slug = ctx.page.params.slug
	// 	return { props: { slug } }
	// }
</script>

<script>
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { session } from '$app/stores'
	// export let slug
	const confirmationCode = $page.params.slug
	let user

	onMount(async () => {
		const res = await fetch('/auth/confirm', {
			method: 'POST',
			body: JSON.stringify(confirmationCode)
		})
		// const json = await res.json()
		// console.log('res: ', json)
		if (res.ok) {
			// get user details and save it to session then redirect to login
			// const res = await fetch('/user')
			const json = await res.json()
			console.log('res: ', json)
			// user = await res.json()
			// session.user = {
			// 	uid: user._id,
			// 	name: user.name,
			// 	email: user.email
			// }

			// goto('/')
		} else {
			error = 'Not able to find your details.'
		}
		// const user = await res.json()
		// name = user.name
	})
</script>

<h1>Confirmation Page 1</h1>

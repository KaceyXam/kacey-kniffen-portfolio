import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const name = data.get("name");
	const email = data.get("email");
	const message = data.get("message");

	if (!name || !email || !message) {
		return new Response(
			JSON.stringify({
				message: "Missing required fields",
			}),
			{ status: 400 }
		);
	}

	// Send Email Here

	return new Response(
		JSON.stringify({
			message: "Success!",
		}),
		{ status: 200 }
	);
};

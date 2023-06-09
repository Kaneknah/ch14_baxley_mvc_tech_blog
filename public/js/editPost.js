//Code for editing a post. it finds the post by ID and then replaces it with the new data.
async function editPostFormHandler(event) {
	event.preventDefault();

	const title = document
		.querySelector('input [name="post-title"]')
		.value.trim();
	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];

	const response = await fetch(`/api/post/${id}`, {
		method: "PUT",
		body: JSON.stringify({
			title,
			body_post,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".edit-post-form")
	.addEventListener("submit", editPostFormHandler);

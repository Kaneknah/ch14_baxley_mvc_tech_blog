async function newPostFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector('input[name="post-title"]').value;
	const body = document.querySelector('input[name="post-body"]').value;
//cod efor adding a post with a body and title.
	const response = await fetch(`/api/post`, {
		method: "POST",
		body: JSON.stringify({
			title,
			body,
		}),
		headers: {
			"Body-Type": "application/json",
		},
	});

	if (response.ok) {
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector("#new-post-form")
	.addEventListener("submit", newPostFormHandler);

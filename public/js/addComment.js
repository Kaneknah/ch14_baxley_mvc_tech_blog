
//code for adding a new comment. The comment is connected to a post by its ID. 
async function newCommentFormHandler(event) {
	event.preventDefault();

	const comment_body = document
		.querySelector('textarea[name="comment-body"]')
		.value.trim();

	const post_id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];

	if (comment_body) {
		const response = await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({
				post_id,
				comment_body,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".comment-form")
	.addEventListener("submit", newCommentFormHandler);

const form = document.getElementById("blogForm");

form.addEventListener("submit", function() {
		event.preventDefault();

		const inputValue = document.getElementById("inputbox").value;

		let newElement = document.createElement("p");

		newElement.innerHTML = inputValue;

		document.body.appendChild(newElement);

		document.getElementById("inputbox").value="";

});



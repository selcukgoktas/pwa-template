function fetchdata() {
	fetch('http://api.open-notify.org/iss-now.json')
		.then((res) => res.json())
		.then((resJson) => console.log(resJson));
}

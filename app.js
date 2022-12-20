(function () {
	const inputRange = document.getElementById("price-range-input");
	const inputSwitch = document.getElementById("switch");

	const data = [
		{
			pageViews: "10k",
			price: "$10.00",
		},
		{
			pageViews: "50k",
			price: "$15.00",
		},
		{
			pageViews: "100k",
			price: "$20.00",
		},
		{
			pageViews: "500k",
			price: "$30.00",
		},
		{
			pageViews: "1M",
			price: "$45.00",
		},
	];

	function setMaxValues(data, inputRange) {
		inputRange.max = data.length;
	}

	function renderPrice(rangeValue, checkStatus) {
		const pageViews = document.getElementById("pageviews");
		const price = document.getElementById("price");

		switch (rangeValue) {
			case 1:
				pageViews.innerHTML = "10K";
				price.innerHTML = checkStatus ? "$10.00" : "$8.00";
				break;
			case 2:
				pageViews.innerHTML = "50K";
				price.innerHTML = checkStatus ? "$15.00" : "$12.00";
				break;
			case 3:
				pageViews.innerHTML = "100K";
				price.innerHTML = checkStatus ? "$20.00" : "$16.00";
				break;
			case 4:
				pageViews.innerHTML = "500K";
				price.innerHTML = checkStatus ? "$30.00" : "$24.00";
				break;
			case 5:
				pageViews.innerHTML = "1M";
				price.innerHTML = checkStatus ? "$45.00" : "$36.00";
				break;
			default:
				break;
		}
	}

	window.onload = function () {
		setMaxValues(data, inputRange);

		inputSwitch.addEventListener("change", (e) => {
			let rangeValue = parseInt(inputRange.value);
			let checkStatus = e.target.checked;
			renderPrice(rangeValue, checkStatus);
		});

		inputRange.addEventListener("change", (e) => {
			let rangeValue = parseInt(e.target.value);
			let checkStatus = inputSwitch.checked;
			renderPrice(rangeValue, checkStatus);
		});
	};
})();

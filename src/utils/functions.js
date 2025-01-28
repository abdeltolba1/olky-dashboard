const convertToEuro = (amount) => {
	const formattedAmount = new Intl.NumberFormat("fr-FR").format(
		Math.floor(amount)
	);
	return `${formattedAmount},${(amount % 1).toFixed(2).split(".")[1]} €`;
};

const checkUpDown = (amount, isUp) => {
	return `${isUp ? "+" : "-"} ${convertToEuro(amount)}`;
};

const timeAgo = (timestamp) => {
	let date;

	if (typeof timestamp === "string") {
		date = new Date(timestamp);
	} else if (
		typeof timestamp === "number" &&
		timestamp.toString().length === 10
	) {
		date = new Date(timestamp * 1000);
	} else {
		date = new Date(timestamp);
	}

	const now = new Date();
	const seconds = Math.floor((now - date) / 1000);

	if (seconds < 60) return "Maintenant";
	const minutes = Math.floor(seconds / 60);
	if (minutes < 60) return `Il y a ${minutes} min`;
	const hours = Math.floor(minutes / 60);
	if (hours < 24) return `Il y a ${hours} h`;
	const days = Math.floor(hours / 24);
	if (days < 7) return `Il y a ${days} jours`;
	const weeks = Math.floor(days / 7);
	if (weeks < 4) return `Il y a ${weeks} semaines`;
	const months = Math.floor(days / 30);
	if (months < 12) return `Il y a ${months} mois`;
	const years = Math.floor(days / 365);
	return `Il y a ${years} ans`;
};

export { convertToEuro, checkUpDown, timeAgo };

import axios from "axios";

const mainMenuData = () => {
	return [
		{
			category: null,
			items: [
				{
					text: "Tableau de bord",
					link: "#",
					icon: "ChartBarIcon",
					active: true,
				},
			],
		},
		{
			category: "OlkyPay",
			items: [
				{
					text: "Comptes",
					link: "#",
					icon: "Square2StackIcon",
					active: false,
				},
				{
					text: "Cartes",
					link: "#",
					icon: "CreditCardIcon",
					active: false,
				},
				{
					text: "Virements",
					link: "#",
					icon: "ArrowsUpDownIcon",
					active: false,
				},
				{
					text: "Historique des transactions",
					link: "#",
					icon: "ClockIcon",
					active: false,
				},
			],
		},
		{
			category: "OlkyWallet",
			items: [
				{
					text: "Mon portefeuille",
					link: "#",
					icon: "WalletIcon",
					active: false,
				},
				{
					text: "Explorer les cryptos",
					link: "#",
					icon: "GlobeAltIcon",
					active: false,
				},
				{
					text: "Explorer les cryptos",
					link: "#",
					icon: "GlobeAltIcon",
					active: false,
				},
			],
		},
	];
};

const olkyPayData = () => {
	const balance = 1798;
	const balance_on_chain = {
		sum: "122 500",
		key: "KYPAY",
	};

	const last_transaction = [
		{
			id: 1,
			company: "NUN-TECH",
			initials: "NT",
			bgColor: "bg-primary",
			description: "Purchasing : 6268-1710495878-9418-1...",
			date: "2025-01-27 12:00:00",
			amount: 15,
			amountUp: true,
		},
		{
			id: 2,
			company: "OLKY",
			initials: "OL",
			bgColor: "bg-secondary",
			description: "Purchasing : 6268-1710495878-9418-1235411...",
			date: "2025-01-15 12:00:00",
			amount: 15,
			amountUp: false,
		},
		{
			id: 3,
			company: "OLKY",
			initials: "OL",
			bgColor: "bg-secondary",
			description: "Purchasing : 6268-1710495878-9418-1235411...",
			date: "2024-09-25 12:00:00",
			amount: 1000,
			amountUp: true,
		},
	];

	return { balance, balance_on_chain, last_transaction };
};

const olkyWalletData = () => {
	const balance = 54254.75;
	const wallet = [
		{
			crypto: "Kycoin",
			logo: "kycoin.png",
			value: "10 KYC",
			amuont: 1000,
			growth: "1.5%",
			growthUp: true,
		},
		{
			crypto: "USDC",
			logo: "usdc.svg",
			value: "1.2 USDC",
			amuont: 3626.72,
			growth: "0.65%",
			growthUp: true,
		},
		{
			crypto: "Dai",
			logo: "dai.svg",
			value: "0.8 DAI",
			amuont: 49628.03,
			growth: "0.07%",
			growthUp: false,
		},
	];
	const last_transaction = [
		{
			operation: {
				from: "Euro",
				to: "Kycoin",
				fromLogo: "euro.png",
				toLogo: "kycoin.png",
			},
			date: "2025-01-27 12:00:00",
			amount: {
				sum: 5.5,
				sumUp: false,
				crypto: "+ 0.5 KYC",
			},
		},
		{
			operation: {
				from: "USDC",
				to: "Euro",
				fromLogo: "usdc.svg",
				toLogo: "euro.png",
			},
			date: "2025-01-17 12:00:00",
			amount: {
				sum: 1600.74,
				sumUp: true,
				crypto: "- 0.5 USDC",
			},
		},
		{
			operation: {
				from: "Euro",
				to: "Kycoin",
				fromLogo: "euro.png",
				toLogo: "kycoin.png",
			},
			date: "2025-01-10 12:00:00",
			amount: {
				sum: 700,
				sumUp: false,
				crypto: "+ 7 KYC",
			},
		},
		{
			operation: {
				from: "Euro",
				to: "Dai",
				fromLogo: "euro.png",
				toLogo: "dai.svg",
			},
			date: "2024-10-07 12:00:00",
			amount: {
				sum: 700,
				sumUp: false,
				crypto: "+ 7 KYC",
			},
		},
		{
			operation: {
				from: "Kycoin",
				to: "Euro",
				fromLogo: "kycoin.png",
				toLogo: "euro.png",
			},
			date: "2024-09-27 12:00:00",
			amount: {
				sum: 1500.32,
				sumUp: true,
				crypto: "+ 1.2 KYC",
			},
		},
	];

	return { balance, wallet, last_transaction };
};

export { mainMenuData, olkyPayData, olkyWalletData };

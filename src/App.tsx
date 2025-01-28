import "./App.css";
import MenuLink from "./components/MenuLink";
import {
	ChartBarIcon,
	Square2StackIcon,
	CreditCardIcon,
	ArrowsUpDownIcon,
	ClockIcon,
	WalletIcon,
	GlobeAltIcon,
	ArrowUpRightIcon,
	ArrowDownRightIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/solid";

import { convertToEuro, checkUpDown, timeAgo } from "./utils/functions";
import { mainMenuData, olkyPayData, olkyWalletData } from "./utils/mockData";

const iconComponents: { [key: string]: React.ElementType } = {
	ChartBarIcon,
	Square2StackIcon,
	CreditCardIcon,
	ArrowsUpDownIcon,
	ClockIcon,
	WalletIcon,
	GlobeAltIcon,
};

function App() {
	const menu = mainMenuData();
	const olkyPay = olkyPayData();
	const olkyWallet = olkyWalletData();

	return (
		<div className="flex min-h-screen">
			<aside className="w-1/6 bg-white border-r border-solid border-r-lightGray">
				<div className="p-6">
					<div className="flex items-center space-x-4">
						<img
							className="w-12 h-12 rounded-full border-2 border-solid border-primary p-[2px]"
							src="./profile.png"
							alt="User Avatar"
						/>
						<div>
							<h2 className="font-montserrat font-semibold leading-[15px]">
								Lise Cooper
							</h2>
							<p className="font-medium text-sm text-mediumGray">
								Perso - FR76 3984 ... 893
							</p>
						</div>
					</div>
				</div>
				<nav className="p-6">
					{menu.map((section, index) => (
						<div className="mb-8" key={index}>
							{section.category && (
								<h3 className="text-gray-400 text-sm font-medium mb-3">
									{section.category}
								</h3>
							)}

							<ul className="space-y-4 mt-3">
								{section.items.map((item, key) => {
									const Icon = iconComponents[item.icon];
									return (
										<li key={key}>
											<MenuLink
												text={item.text}
												link={item.link}
												icon={
													<Icon className="size-4" />
												}
												isActive={item.active}
											/>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</nav>
			</aside>

			<main className="flex-1 p-6">
				<div className="mb-6 p-4">
					<h1 className="text-4xl font-semibold">Tableau de bord</h1>
				</div>

				<div className="dashboard">
					<div className="flex items-center justify-between px-4">
						<h2 className="text-3xl font-semibold">OlkyPay</h2>
						<a className="text-primary font-semibold" href="#">
							Voir tout
						</a>
					</div>
					<div className="flex">
						<div className="flex flex-col w-[30%]">
							<div className="flex-1 border-[2px] border-solid border-lightGray rounded-[7px] h-full p-5 pb-0 m-2">
								<h2 className="text-xl font-medium text-mediumGray">
									Votre solde
								</h2>
								<div className="text-4xl mt-2 font-bold text-primary">
									{convertToEuro(olkyPay.balance)}
								</div>
							</div>
							<div className="flex-1 border-[2px] border-solid border-lightGray rounded-[7px] h-full p-5 pb-0 m-2">
								<h2 className="text-xl font-medium text-mediumGray">
									Votre solde{" "}
									<span className="text-black font-semibold">
										on-chain
									</span>
								</h2>
								<div className="text-4xl mt-2 font-bold text-black">
									{olkyPay.balance_on_chain.sum}
									<span className="uppercase text-base">
										{` ${olkyPay.balance_on_chain.key}`}
									</span>
								</div>
							</div>
						</div>

						<div className="w-[70%] border-[2px] border-solid border-lightGray rounded-[7px] h-full py-5 pb-0 m-2">
							<h2 className="text-xl font-medium text-mediumGray px-5">
								Dernières transactions
							</h2>
							<div className="overflow-x-auto">
								<table className="table-auto w-full text-left mt-4">
									<tbody>
										{olkyPay.last_transaction.map(
											(transaction, index) => (
												<tr
													key={index}
													className="hover:bg-primary hover:bg-opacity-10 transition duration-200"
												>
													<td className="py-3 px-5">
														<div className="inline-block mr-3">
															<span
																className={`${transaction.bgColor} flex items-center justify-center w-10 h-10 leading-[5px] rounded-full font-bold text-white`}
															>
																{
																	transaction.initials
																}
															</span>
														</div>
														<div className="inline-block">
															<span className="font-medium uppercase">
																{
																	transaction.company
																}
															</span>
															<span className="ml-2 text-darkGray font-medium">
																{
																	transaction.description
																}
															</span>
														</div>
													</td>
													<td className="py-3 px-5 text-darkGray font-medium">
														{timeAgo(
															transaction.date
														)}
													</td>
													<td
														className={`py-3 px-5 font-semibold text-right ${
															transaction.amountUp
																? "text-primary"
																: "text-black"
														}`}
													>
														{checkUpDown(
															transaction.amount,
															transaction.amountUp
														)}
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<div className="dashboard mt-5">
					<div className="flex items-center justify-between px-4">
						<h2 className="text-3xl font-semibold">OlkyWallet</h2>
						<a className="text-primary font-semibold" href="#">
							Voir tout
						</a>
					</div>
					<div className="flex">
						<div className="flex flex-col w-[30%]">
							<div className="flex-1 border-[2px] border-solid border-lightGray rounded-[7px] h-full p-5 m-2">
								<h2 className="text-xl font-medium text-mediumGray">
									Votre solde
								</h2>
								<div className="text-4xl mt-2 font-bold text-secondary">
									{convertToEuro(olkyWallet.balance)}
								</div>
							</div>
							<div className="flex-1 border-[2px] border-solid border-lightGray rounded-[7px] h-full p-5 m-2">
								<h2 className="text-xl font-medium text-mediumGray">
									Portefeuille
								</h2>
								<div className="mt-2 space-y-4">
									{olkyWallet.wallet.map((wallet, index) => (
										<div
											key={index}
											className="flex items-center justify-between"
										>
											<div className="flex items-center space-x-3">
												<img
													src={`./${wallet.logo}`}
													alt={wallet.crypto}
													className="w-8 h-8 rounded-full"
												/>
												<div>
													<p className="font-semibold text-black">
														{wallet.crypto}
													</p>
													<p className="font-medium text-sm text-darkGray">
														{wallet.value}
													</p>
												</div>
											</div>
											<div className="text-right">
												<p className="font-bold text-black">
													{convertToEuro(
														wallet.amuont
													)}
												</p>
												<p
													className={`text-sm font-semibold flex items-center justify-end ${
														wallet.growthUp
															? "text-secondary"
															: "text-mediumGray"
													}`}
												>
													{wallet.growthUp ? (
														<ArrowUpRightIcon className="size-4 mr-1" />
													) : (
														<ArrowDownRightIcon className="size-4 mr-1" />
													)}
													{wallet.growth}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="w-[70%] border-[2px] border-solid border-lightGray rounded-[7px] h-full pt-5 m-2">
							<h2 className="text-xl font-medium text-mediumGray px-5">
								Dernières transactions
							</h2>
							<div className="overflow-x-auto">
								<table className="table-auto w-full text-left mt-4">
									<thead className="border-b border-lightGray border-b-[2px]">
										<tr>
											<td className="px-5 py-3 text-mediumGray font-medium">
												Opération
											</td>
											<td className="px-5 py-3 text-mediumGray font-medium">
												Date
											</td>
											<td className="px-5 py-3 text-mediumGray font-medium text-right">
												Montant
											</td>
										</tr>
									</thead>
									<tbody>
										{olkyWallet.last_transaction.map(
											(transaction, index) => (
												<tr
													key={index}
													className="hover:bg-primary hover:bg-opacity-10 transition duration-200"
												>
													<td className="py-3 px-5 flex items-center space-x-2">
														<div className="inline-block mr-3 relative w-10 h-10">
															<img
																src={`./${transaction.operation.fromLogo}`}
																alt="background"
																className="absolute top-0 left-0 w-7 h-7 rounded-full"
															/>

															<img
																src={`./${transaction.operation.toLogo}`}
																alt="foreground"
																className="absolute bottom-0 right-0 w-7 h-7 rounded-full"
															/>
														</div>
														<div className="inline-block">
															<span className="font-medium">
																{
																	transaction
																		.operation
																		.from
																}{" "}
																<ArrowRightIcon className="size-3 inline-block" />{" "}
																{
																	transaction
																		.operation
																		.to
																}
															</span>
														</div>
													</td>
													<td className="py-3 px-5 text-darkGray font-medium">
														{timeAgo(
															transaction.date
														)}
													</td>
													<td className="pt-3 px-5 text-black font-semibold text-right">
														{checkUpDown(
															transaction.amount
																.sum,
															transaction.amount
																.sumUp
														)}
														<span className="block font-medium text-darkGray">
															{
																transaction
																	.amount
																	.crypto
															}
														</span>
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;

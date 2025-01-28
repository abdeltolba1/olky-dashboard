import React from "react";

interface MenuLinkProps {
	text: string;
	link: string;
	icon: React.ReactNode;
	isActive?: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({
	text,
	link,
	icon,
	isActive = false,
}) => {
	return (
		<a
			href={link}
			className={`flex items-center font-medium ${
				isActive ? "text-primary bg-opacity-20" : "text-darkGray"
			} hover:text-primary hover:bg-opacity-20 transition duration-200 ease-in-out`}
		>
			<div
				className={`p-2 rounded-[5px] mr-3 ${
					isActive
						? "text-primary bg-primary bg-opacity-10"
						: "text-darkGray bg-lightGray"
				}`}
			>
				{React.cloneElement(icon as React.ReactElement, {
					className: `${
						(icon as React.ReactElement).props.className
					} ${isActive ? "text-primary" : "text-darkGray"}`,
				})}
			</div>
			{text}
		</a>
	);
};

export default MenuLink;

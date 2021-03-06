import tw, { styled, theme, css } from "twin.macro";

type ButtonProps = {
	isPrimary?: boolean;
	isSecondary?: boolean;
	isSmall?: boolean;
};

const Button = styled.button(
	({ isPrimary, isSecondary, isSmall }: ButtonProps) => [
		// The common button styles added with the tw import
		tw`text-lg px-8 py-2 rounded focus:outline-none`,
		tw`transform transition-transform duration-75`,

		// Use the variant grouping feature to add variants to multiple classes
		tw`hocus:(scale-105 text-yellow-400)`,

		// Use props to conditionally style your components
		isPrimary && tw`bg-black text-white border-black`,

		// Combine regular css with tailwind classes within backticks
		isSecondary && [
			css`
				box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
			`,
			tw`border-2 border-yellow-600`,
		],

		// Conditional props can be added
		isSmall ? tw`text-sm` : tw`text-lg`,

		// The theme import can supply values from your tailwind.config.js
		css`
			color: ${theme`colors.primary`};
		`,
	]
);

export default Button;

import { FunctionComponent } from "react";
import tw from "twin.macro";

export const ListView: FunctionComponent = ({ children }) => {
	return <ul>{children}</ul>;
};

export const ListItem: FunctionComponent = ({ children }) => {
	return <li>{children}</li>;
};

export const ListGroupTitle = tw.div`
text-lg text-black dark:text-white font-bold pt-4
`;

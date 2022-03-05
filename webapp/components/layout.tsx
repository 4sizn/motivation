import React from "react";
import tw from "twin.macro";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div tw="flex flex-col">{children}</div>
		</>
	);
}

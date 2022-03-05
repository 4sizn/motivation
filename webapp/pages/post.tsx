import { NextPage } from "next";
import React from "react";
import PageWrap from "../components/PageWrap";
import { theme, css } from "twin.macro";

const Post: NextPage = () => {
	return (
		<PageWrap>
			<div tw="text-white">포스트입니다</div>
		</PageWrap>
	);
};

export default Post;

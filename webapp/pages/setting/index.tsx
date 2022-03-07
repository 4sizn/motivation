import type { NextPage } from "next";
import { PageTitle } from "../../components/page";
import { useRouter } from "next/router";
import { ListItem, ListGroupTitle, ListView } from "../../components/List";
export const Setting: NextPage = () => {
	const router = useRouter();
	const isMobile = false;

	return (
		<div>
			<PageTitle>설정</PageTitle>
			<ListView>
				{isMobile && (
					<>
						<ListGroupTitle>설정</ListGroupTitle>
						<ListItem>
							<button
								tw="w-full text-left p-2 bg-transparent border-none"
								onClick={() => router.push("/post")}
							>
								앱아이콘
							</button>
						</ListItem>
						<ListItem>
							<button
								tw="w-full text-left p-2 bg-transparent border-none"
								onClick={() => router.push("/post")}
							>
								알림 설정
							</button>
						</ListItem>
					</>
				)}
				<ListGroupTitle>나</ListGroupTitle>
				<ListItem>
					<button
						tw="w-full text-left p-2 bg-transparent border-none"
						onClick={() => router.push("/post")}
					>
						내글 게시하기
					</button>
				</ListItem>
				<ListItem>
					<button
						tw="w-full text-left p-2 bg-transparent border-none"
						onClick={() => router.push("/post")}
					>
						내글 보기
					</button>
				</ListItem>
				<ListGroupTitle>Motivation</ListGroupTitle>
				<ListItem>
					<button
						tw="w-full text-left p-2 bg-transparent border-none"
						onClick={() => router.push("/post")}
					>
						Motivation 필터링
					</button>
				</ListItem>
				<ListGroupTitle>다른</ListGroupTitle>
				<ListItem>
					<button
						tw="w-full text-left p-2 bg-transparent border-none"
						onClick={() => router.push("/post")}
					>
						도움말
					</button>
				</ListItem>
				<ListItem>
					<button
						tw="w-full text-left p-2 bg-transparent border-none"
						onClick={() => router.push("/post")}
					>
						팔로잉 하기
					</button>
				</ListItem>
			</ListView>
		</div>
	);
};
export default Setting;

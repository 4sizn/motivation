import Image from "next/image";
import "twin.macro";

type AvatarProps = Pick<HTMLImageElement, "src"> & {
	size: number | string;
};
const Avatar = ({ src, size }: AvatarProps) => {
	return (
		<span>
			<Image
				tw="rounded-full mx-auto"
				alt="avatar"
				src={src}
				width={size}
				height={size}
			/>
		</span>
	);
};

export default Avatar;

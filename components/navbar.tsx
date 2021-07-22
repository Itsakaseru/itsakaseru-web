import Link from "next/link";

interface IProps
{
	page: string
};

export default function Navbar({ page }: IProps)
{
	const links = [
		{
			"name": "Home",
			"href": "/"
		},
		{
			"name": "Portfolio",
			"href": "/portfolio"
		},
		{
			"name": "About Me",
			"href": "/aboutme"
		}
	]

	return (
		<nav className="m-10 flex justify-between">
			<div className="self-center font-primary font-semibold text-primary text-3xl select-none">
				Itsakaseru
			</div>
			<div id="navigation" className="bg-white rounded-xl shadow-normal px-5 py-3">
				<div className="flex space-x-6 font-secondary font-semibold text-primary text-base">
					{
						links.map(({ name, href }, index) =>
						{
							return (
								<Link href={ href }>
									<a key={ index } className={ `${ name === page ? "bg-primary text-white" : "hover:bg-primary hover:text-white" } py-1 px-4 rounded transition-colors duration-300` }>
										{ name }
									</a>
								</Link>
							);
						})
					}
				</div>
			</div>
		</nav>
	);
}
import { AppProps } from "next/dist/next-server/lib/router/router";

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
		<nav className="m-10">
			<div className="float-left font-primary font-semibold text-primary text-3xl select-none">
				Itsakaseru
			</div>
			<div id="navigation" className="bg-white rounded-xl shadow-navigation px-5 py-3 float-right">
				<div className="flex space-x-6 font-secondary font-semibold text-primary text-base">
					{
						links.map(({ name, href }, index) =>
						{
							return (
								<a key={ index } className={ `${ name === page ? "bg-primary text-white" : "hover:bg-primary hover:text-white" } py-1 px-4 rounded transition-colors duration-300` } href={ href }>
									{ name }
								</a>
							);
						})
					}
				</div>
			</div>
		</nav>
	);
}
export default function Navbar()
{
	const links = [
		{
			"name": "Home",
			"href": "/"
		},
		{
			"name": "Portfolio",
			"href": "/"
		},
		{
			"name": "About Me",
			"href": "/"
		}
	]

	return (
		<nav className="m-10">
			<div className="float-left font-primary font-semibold text-primary text-3xl">
				Itsakaseru
			</div>
			<div id="navigation" className="bg-white rounded-xl shadow-navigation px-5 py-3 float-right">
				<div className="flex space-x-6 font-secondary font-semibold text-primary text-base">
					{
						links.map(({ name, href }, index) =>
						{
							return (
								<a key={ index } className="py-1 px-4 rounded hover:bg-primary hover:text-white transition-colors duration-300" href={ href }>
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
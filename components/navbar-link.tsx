export default function NavbarLink()
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
		<>
			{
				links.map(({ name, href }) =>
				{
					return (
						<a className="py-1 px-4 rounded hover:bg-primary hover:text-white transition-colors" href={ href }>
							{ name }
						</a>
					);
				})
			}
		</>
	);
}
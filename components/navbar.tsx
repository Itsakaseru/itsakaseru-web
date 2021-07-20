import NavbarLink from "../components/navbar-link";

export default function Navbar()
{
	return (
		<nav className="p-10">
			<div className="float-left font-primary font-semibold text-primary text-3xl">
				Itsakaseru
			</div>
			<div id="navigation" className="bg-white rounded-xl drop-shadow-navigation px-5 py-3 float-right">
				<div className="flex space-x-6 font-secondary font-semibold text-primary text-base">
					<NavbarLink />
				</div>
			</div>
		</nav>
	);
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function QuickNav()
{
	const quick_links = [
		{
			"icon": faYoutube,
			"href": "/"
		},
		{
			"icon": faGithub,
			"href": "/"
		},
		{
			"icon": faTwitter,
			"href": "/"
		},
		{
			"icon": faBookOpen,
			"href": "/"
		}
	];

	return (
		<div className="self-center rounded-xl shadow-navigation bg-white px-7 py-4 space-x-8">
			{
				quick_links.map(({ icon, href }) =>
				{
					return (
						<a href={ href } className="text-3xl text-primary hover:text-primary-light transition-colors duration-300">
							<FontAwesomeIcon icon={ icon } />
						</a>
					);
				})
			}
		</div>
	);
}
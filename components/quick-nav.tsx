import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function QuickNav()
{
	const quick_links = [
		{
			"icon": faYoutube,
			"href": "https://www.youtube.com/SkyEncripttion"
		},
		{
			"icon": faGithub,
			"href": "https://github.com/Itsakaseru"
		},
		{
			"icon": faTwitter,
			"href": "https://www.twitter.com/Itsakaseru"
		},
		{
			"icon": faBookOpen,
			"href": "/coming-soon"
		}
	];

	return (
		<div className="self-center rounded-xl shadow-normal bg-white mt-8 mb-10 px-5 py-3 md:px-7 md:py-4 space-x-8">
			{
				quick_links.map(({ icon, href }, index) =>
				{
					return (
						<a key={ index } href={ href } target="_blank" rel="noreferrer" className="text-2xl md:text-3xl text-primary hover:text-primary-light transition-colors duration-300">
							<FontAwesomeIcon icon={ icon } />
						</a>
					);
				})
			}
		</div>
	);
}
import Link from 'next/link';
import React from 'react';
import PageBuilder from './PageBuilder';
import Socials from './Socials';

const Header = () => {
	return (
		<div className="h-110 w-full overflow-hidden relative ">
			<div className="bg-purple-600 w-110 h-110 lg:w-120 lg:h-120 -bottom-80 sm:-bottom-80 rounded-full absolute -right-96 sm:-right-80 " />

			<div className="sticky z-20 ">
				<PageBuilder>
					<div className="flex justify-between items-end">
						<div>
							<h1 className="text-5xl sm:text-6xl font-bold text-indigo-900 mt-48">Elias</h1>
							<h1 className="text-5xl sm:text-6xl font-bold text-indigo-900 ">Debaveye</h1>
							<h2 className="max-w-xs mt-8 text-lg text-gray-600 mb-8">
								A student full stack developer with a passion for webdesign
							</h2>
							<Link href="/contact">
								<a className="text-white font-bold  transition-colors duration-150 ease-in-out hover:bg-purple-500 bg-purple-600 py-1 px-6 rounded">
									Contact
								</a>
							</Link>
						</div>
						<Socials />
					</div>
				</PageBuilder>
			</div>
		</div>
	);
};

export default Header;

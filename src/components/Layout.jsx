import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
	const location = useLocation();

	return (
		<div className='md:flex md:min-h-screen'>
			<aside className='md:w-1/4 bg-blue-900 text-center py-10'>
				<h2 className='text-3xl font-black text-center text-white'>
					CRM - Clientes
				</h2>

				<nav className='mt-16'>
					<Link
						to='/'
						className={`${
							location.pathname === '/'
								? 'bg-blue-600 duration-700 '
								: 'hover:text-blue-300 hover:scale-110'
						} text-2xl block mt-2  p-2 text-white`}
					>
						Clientes
					</Link>

					<Link
						to='/clientes/nuevo'
						className={`${
							location.pathname === '/clientes/nuevo'
								? 'bg-blue-600 duration-500 '
								: 'hover:text-blue-300 hover:scale-110'
						} text-2xl block mt-2  p-2 text-white`}
					>
						Nuevo Cliente
					</Link>
				</nav>
			</aside>

			<main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;

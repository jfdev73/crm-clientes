import { useLoaderData } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/clientes';

export const loader = async () => {
	const clientes = await obtenerClientes();

	//console.log(clientes);

	return clientes;
};

const Index = () => {
	const clientes = useLoaderData();

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Clientes</h1>

			<p className='nt-3'>Administra tus clientes</p>
			{clientes.length ? (
				<div className='overflow-auto'>
					<table className='w-full bg-white shadow mt-5 table-auto overflow-hidden rounded-md'>
						<thead className='bg-blue-800 text-white'>
							<tr>
								<th className='p-2'>Cliente</th>
								<th className='p-2'>Contacto</th>
								<th className='p-2'>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{clientes.map(cliente => (
								<Cliente key={cliente.id} cliente={cliente} />
							))}
						</tbody>
					</table>
				</div>
			) : (
				<p className='text-center mt-10'>No hay clientes aun </p>
			)}
		</>
	);
};

export default Index;

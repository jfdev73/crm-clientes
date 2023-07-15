import { Form, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cliente = ({ cliente }) => {
	const { nombre, empresa, email, telefono, id } = cliente;

	const navigate = useNavigate();

	return (
		<tr className='border-b'>
			<td className='p-6 text-center space-y-2'>
				<p className='text-2xl text-gray-800'>{nombre}</p>
				<p>{empresa}</p>
			</td>
			<td className='p-6 text-center'>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Email: </span>
					{email}
				</p>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Telefono: </span>
					{telefono}
				</p>
			</td>
			<td className='p-6 '>
				<div className='flex gap-4 justify-center items-center'>
					<button
						className='text-white bg-blue-600 hover:bg-blue-900 uppercase font-bold text-xs rounded-md p-2'
						onClick={() => navigate(`/clientes/editar/${id}`)}
					>
						Editar
					</button>

					<Form method='post' action={`/clientes/eliminar/${id}`}>
						<button
							type='submit'
							className='text-white hover:bg-red-900 uppercase font-bold text-xs bg-red-600 rounded-md p-2'
						>
							Eliminar
						</button>
					</Form>
				</div>
			</td>
		</tr>
	);
};
export default Cliente;

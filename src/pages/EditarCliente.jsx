import { Form, useLoaderData, redirect, useActionData } from 'react-router-dom';
import ButtonVolver from '../components/ButtonVolver';
import Titulo from '../components/Titulo';
import { actualizarCliente, obtenerCliente } from '../data/clientes';
import Formulario from '../components/Formulario';
import ButtonSubmit from '../components/ButtonSubmit';
import { validarCliente } from '../services/validarCliente.service';
import Swal from 'sweetalert2';
//import Error from '../components/Error';

export const loader = async ({ params }) => {
	const cliente = await obtenerCliente(params.clienteId);
	if (Object.values(cliente).length === 0) {
		throw new Response('', {
			status: 404,
			statusText: 'Cliente no existente',
		});
	}

	return cliente;
};

export const action = async ({ request, params }) => {
	const formData = await request.formData();

	const cliente = Object.fromEntries(formData);

	const isValid = validarCliente(cliente);

	// if (Object.keys(errores).length) {
	// 	return errores;
	// }
	if (isValid) {
		await actualizarCliente(params.clienteId, cliente);
		Swal.fire({
			icon: 'success',
			title: 'Cliente actualizado con exito',
		});
		return redirect('/');
	}
	return {};
};

const EditarCliente = () => {
	const cliente = useLoaderData();
	//const errores = useActionData();
	console.log(cliente);
	return (
		<>
			<Titulo titulo={'Editar Cliente'} />
			{/* <p className='pt-3 text-2xl'>
				Llena todos los campos para registrar un nuevo cliente
			</p> */}
			<div className='flex justify-end'>
				<ButtonVolver />
			</div>

			<div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-8'>
				{/* {errores?.length &&
					errores.map((error, i) => <Error key={i}>{error}</Error>)} */}

				<Form method='post' noValidate>
					<Formulario cliente={cliente} />

					<ButtonSubmit text={'Editar Cliente'} />
				</Form>
			</div>
		</>
	);
};
export default EditarCliente;

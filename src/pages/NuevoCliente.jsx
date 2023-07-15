/* eslint-disable no-control-regex */
import { Form, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/Formulario';

//import Error from '../components/Error';
import { agregarCliente } from '../data/clientes';
import ButtonVolver from '../components/ButtonVolver';
import Titulo from '../components/Titulo';
import ButtonSubmit from '../components/ButtonSubmit';
import { validarCliente } from '../services/validarCliente.service';
import Swal from 'sweetalert2';

export const action = async ({ request }) => {
	const formData = await request.formData();

	const cliente = Object.fromEntries(formData);

	const isValid = validarCliente(cliente);

	if (isValid) {
		await agregarCliente(cliente);
		Swal.fire({
			icon: 'success',
			title: 'Cliente creado con exito',
		});
		return redirect('/');
	}
	return {};
};

const NuevoCliente = () => {
	//console.log(errores);
	return (
		<>
			<Titulo titulo={'Nuevo Cliente'} />
			<p className='pt-3 text-2xl'>
				Llena todos los campos para registrar un nuevo cliente
			</p>
			<div className='flex justify-end'>
				<ButtonVolver />
			</div>

			<div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-8'>
				<Form method='post' noValidate>
					<Formulario />

					<ButtonSubmit text={'Registrar Cliente'} />
				</Form>
			</div>
		</>
	);
};

export default NuevoCliente;

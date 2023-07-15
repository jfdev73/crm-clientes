import { redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/clientes';
import Swal from 'sweetalert2';
export const action = async ({ params }) => {
	const alert = await Swal.fire({
		title: 'Estas seguro de eliminar el cliente?',
		text: 'No puedes revertir esto!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, eliminar',
	});
	if (alert.isConfirmed) {
		Swal.fire('Eliminado!', 'Cliente eliminado correctamente.', 'success');
		await eliminarCliente(params.clienteId);
		return redirect('/');
	}
};

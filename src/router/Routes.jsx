import Layout from '../components/Layout';
import NuevoCliente, {
	action,
	action as nuevoClienteForm,
} from '../pages/NuevoCliente';
import Index, { loader as clientesLoader } from '../pages/Index';
import ErrorPage from '../components/ErrorPage';
import EditarCliente, {
	loader as editarCliente,
	action as editarClienteAction,
} from '../pages/EditarCliente';

import { createBrowserRouter } from 'react-router-dom';
import { action as eliminarCliente } from '../pages/EliminarCliente';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Index />,
				loader: clientesLoader,
				errorElement: <ErrorPage />,
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente />,
				action: nuevoClienteForm,
			},
			{
				path: '/clientes/editar/:clienteId',
				element: <EditarCliente />,
				loader: editarCliente,
				action: editarClienteAction,
				errorElement: <ErrorPage />,
			},
			{
				path: '/clientes/eliminar/:clienteId',
				//loader: editarCliente,
				action: eliminarCliente,
				errorElement: <ErrorPage />,
			},
		],
	},
	{},
]);
export default router;

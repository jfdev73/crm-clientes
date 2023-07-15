import { useNavigate } from 'react-router-dom';

const ButtonVolver = () => {
	const navigate = useNavigate();
	return (
		<button
			className='bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md hover:bg-blue-600 hover:scale-x-105 ease-in-out duration-300'
			onClick={() => navigate('/')}
		>
			Volver
		</button>
	);
};
export default ButtonVolver;

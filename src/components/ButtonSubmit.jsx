const ButtonSubmit = ({ text }) => {
	return (
		<input
			type='submit'
			className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-md  cursor-pointer hover:bg-blue-600'
			value={text}
		/>
	);
};
export default ButtonSubmit;

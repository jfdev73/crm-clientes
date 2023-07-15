
import Swal from "sweetalert2";

export const validarCliente = (cliente) => {

  //const errores = [];
  let isValid = false
  const { email } = cliente;

  if (Object.values(cliente).includes('')) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Todos los campos son obligatorios',
    })
    return;

    // errores.push('Todos los campos son obligatorios');
  }

  let regexEmail = new RegExp(
    // eslint-disable-next-line no-control-regex
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regexEmail.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El email no es valido',
    })
    return

    //errores.push('El email no es valido');
  }

  return !isValid;

  //return errores

}
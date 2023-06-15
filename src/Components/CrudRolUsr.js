import SeleccionUsuario from "./SeleccionUsuario";

function CrudRolUsr(){

  const createRolUser = (data) =>{
    console.log(data)
  }

  return(
    <SeleccionUsuario
      createRolUser={createRolUser}
    />
  )
}

export default CrudRolUsr;
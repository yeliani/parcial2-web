import { useNavigate } from "react-router-dom";



const EditComponents = () => {
  const navigate = useNavigate();

   const handleComments = () => {
    
    navigate("/Comments");};
  
  return (
    <>
       <h1>Bienvenido a editar comentario</h1>
        <input type="text" />
       <input type="text" />
        <button >editar</button>
       <button onClick={handleComments}>Regresar</button>
    </>
  );
};

export default EditComponents;
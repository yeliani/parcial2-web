import { useNavigate } from "react-router-dom";




const navigate = useNavigate();
const handleComments = () => {
    
    navigate("/Comments");
  };
  
const AddComponents = () => {

  
  return (
    <>
          <h1>Bienvenido a crear comentario</h1>
        <input type="text" />
           <button >añadir</button>
          <button onClick={handleComments}>Regresar</button>
      
    </>
  );
};

export default AddComponents;
import { useNavigate } from "react-router-dom";


const ToggleFavorite = () => {
   const navigate = useNavigate();
const handleComments = () => {
    
    navigate("/Comments");
  };
  
  return (
    <>

    <button onClick={handleComments}>Regresar</button>

    </>
  );
};

export default ToggleFavorite;
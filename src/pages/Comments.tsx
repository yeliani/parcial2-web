
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import type { Comments } from "../type/typeComments";


export const CommentsCard = ({ name,email,body}: Comments) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleEdit = () => {
    navigate(`/edit/${id}`); 
  };


  return (
    <div className="comments-card">
     
       <p>{name}</p>
       <p>{email}</p>
       <p>{body}</p>
        <button className="edit-btn" onClick={handleEdit}>Editar</button>
        
      </div>
  );
};

export default CommentsCard;


















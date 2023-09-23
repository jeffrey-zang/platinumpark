import { useParams } from "react-router-dom";

const Review = () => {
  const { id: rawId } = useParams();
  
  const id = rawId ? parseInt(rawId) : 0;

  return (
    <div>
      {id}
    </div>
  )
}

export default Review
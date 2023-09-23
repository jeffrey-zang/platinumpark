import { useParams } from "react-router-dom";

const Lot = () => {
  const { id: rawId } = useParams();
  
  const id = rawId ? parseInt(rawId) : 0;

  return (
    <div>
      {id}
    </div>
  )
}

export default Lot
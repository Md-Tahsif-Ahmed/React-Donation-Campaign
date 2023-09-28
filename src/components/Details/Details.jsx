import { useLoaderData } from "react-router-dom";

const Details = () => {
  const donations = useLoaderData();
  console.log(donations);
 

  const { Picture, Title, Description } = donations;

  return (
    <div>
      <h1>{Title}</h1>
      <p>{Description}</p>
      <img src={Picture} alt={Title} />
    </div>
  );
};

export default Details;

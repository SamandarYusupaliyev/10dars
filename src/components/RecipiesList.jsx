import { Link } from "react-router-dom"
function RecipiesList({recipies}) {

  return <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {recipies.map((recipie)=>{
      return (
      <li key={recipie.id}>
        <Link to={`/singleRecipie/${recipie.id}`}>
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
       <figure><img src={recipie.image} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="text-2xl font-bold">{recipie.title}</h2>
        <p className="line-clamp-3 mb-2">{recipie.method}</p>
       <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">More</button>
        </div>
      </div>
      </div>
        </Link>
      </li>
      )
    })}
  </ul>
}

export default RecipiesList
{/* <h3 className="text-3xl">{recipie.title}</h3>
<img src={recipie.image} alt="" /> */}
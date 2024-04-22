import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function SingleRecipe() {
  const {id} = useParams()

  const {data:recipie}=useFetch("http://localhost:3000/recipies/")

  return (
    <div className="flex items-center justify-center text-center">
      {recipie && <div>
        <img src={recipie.img} alt="" className="w-98 h-80 object-cover rounded mb-5"/>
        <h1 className="text-4xl">{recipie.title}</h1>
        </div>}
    </div>
  )
}

export default SingleRecipe
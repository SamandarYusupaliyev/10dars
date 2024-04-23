import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { db } from "../firebase/firebaseConfig";


// loader
export const loader =async({params})=>{
const docRef = doc(db, "recipies",params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  console.log("No such document!");
}
return null
}

function SingleRecipe() {
  const data =useLoaderData()
  console.log(data);
  return(
    <>
    {data && (
      <div>
        <h1  className="text-3xl mb-4 font-bold">{data.title}</h1>
        <img className="w-full h-[450px] mb-6" src={data.image} alt="" />
         <div className="flex gap-4 items-center mb-4">
          <h2 className="text-xl font-bold items-center">Ingredients:</h2>
              <span className=" font-normal  bg-slate-500 text-white w-20 text-center h-7  rounded-3xl cursor-pointer">guruch</span>
              <span className=" font-normal  bg-slate-500 text-white w-20 text-center h-7  rounded-3xl cursor-pointer">piyoz</span>
              <span className=" font-normal  bg-slate-500 text-white w-20 text-center h-7  rounded-3xl cursor-pointer">yog'</span>
              <span className=" font-normal  bg-slate-500 text-white w-20 text-center h-7  rounded-3xl cursor-pointer">go'sht</span>
         </div>
         <div className="flex items-center gap-4 mb-4">
           <h2 className="text-xl font-bold">Cooking time:</h2>
           <span className=" font-normal  bg-slate-500 text-white w-24 text-center h-7  rounded-3xl cursor-pointer">60 minuts</span>
         </div>
      </div>
    )}
   </>
  ) 
}

export default SingleRecipe
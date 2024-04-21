function Create() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-8">
        Create New Recipie
      </h1>

      <form className="flex items-center flex-col gap-5 ">
        <label className="form-control w-full max-w-xs">
           <div className="label">
              <span className="label-text text-[17px]">Title</span>
           </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
           />
        </label>

        <label className="form-control w-full max-w-xs">
           <div className="label">
              <span className="label-text text-[17px]">Ingredients:</span>
           </div>
             <div className="flex gap-2">
             <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
           />
            <button className="btn btn-secondary">Add</button>
             </div>
             <div className="mt-0.5">
             <p>Inredients:Tuz,Go'sht,</p>
           </div>
        </label>

        <label className="form-control w-full max-w-xs">
           <div className="label">
              <span className="label-text text-[16px]">Cooking Time</span>
           </div>
           <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
           />
        </label>
        <label className="form-control w-full max-w-xs">
           <div className="label">
              <span className="label-text  text-[16px]">Image URL:</span>
            </div>
            <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            />
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-[16px]">Method</span>
            </div>
           <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
           ></textarea>
        </label>

        <button className="btn btn-secondary w-full max-w-xs text-[20px]">Submit</button>
      </form>
    </div>
  );8
}

export default Create;



function Contact() {
  return(
      <div className="flex items-center justify-center">
         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
  <div className="modal-action">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
     <button className="btn">Close</button>
   </form>
  </div>
  </div>
  </dialog>
  <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
  </div>
  )
}

export default Contact
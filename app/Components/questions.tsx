"use client";
import { useState } from "react";

export default function Questions (){
    const [show,setshow]= useState(false);
    const [show1,setshow1]= useState(false);
     const [show2,setshow2]= useState(false);
        const [show3,setshow3]= useState(false);
      const [show4,setshow4]= useState(false);
        return(
      <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
  <div className="faq-question">
    <span>What is Netflix?</span>
<button type="button" onClick={()=> setshow(!show)}>
  {show ? "X" :"+"}
</button>
 </div>
{show && (
   <p className="faq-answer">
    Netflix is a streaming service that offers...
  </p>
)}
   
      </div>
<div className="faq-item">
<div className="faq-question">
<span>How Much does Netflix cost?</span>
<button type="button" onClick={()=>setshow1(!show1)}  >
  {show1 ? "X " :"+"}  
</button>
</div>
{show1 && (
  <p  className="faq-answer">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP 100 to EGP 240 a month. No extra costs, no contracts.</p>
)}

</div>



<div className="faq-item">
  <div className="faq-question">
    <span>Where can i watch?</span>
    <button type="button"   onClick={()=> setshow2(!show2)} >
      {show2 ? "X" :"+"}
    </button>
      </div>
    {show2 &&(
<p  className="faq-answer">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/>
You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
 </p>
    ) }

</div>


<div className="faq-item">
  <div className="faq-question">
    <span>How do i cancel?</span>
    <button type="button"   onClick={()=> setshow3(!show3)} >
      {show3 ? "X" :"+"}
    </button>
      </div>
    {show3 &&(
<p  className="faq-answer">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
 </p>
    ) }

</div>



<div className="faq-item">
  <div className="faq-question">
    <span>What can i watch on Netflex?</span>
    <button type="button"   onClick={()=> setshow4(!show4)} >
      {show4 ? "X" :"+"}
    </button>
      </div>
    {show4 &&(
<p  className="faq-answer">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
 </p>
    ) }

</div>



 </>
    )
}
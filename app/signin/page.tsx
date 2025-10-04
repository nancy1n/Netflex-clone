import Link from "next/link";

export default function SignInPage() {
  return (
    <>
    <div className="page" >
              <form className="info_field1">
                        <h1>Sign In</h1>

 <input type="text" id="email1" placeholder="Email address" required ></input>
 <input type="password"  id="pass1" placeholder="Password" ></input>
 <Link href="/">
  <button type="submit">Sign In</button>

 </Link> 

<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
  <label className="form-check-label" htmlFor="flexCheckIndeterminate">
    Remember me 
  </label>
</div>

 </form>


    </div>
    </>
  );
}


import React from 'react'
import { useState } from "react"

function Contactdata() {
    const [user, setuser] = useState({
        name: "",
        email: "",
        phone: "",
        addersh: "",
        experience: "",
        profession: "",
    })

    let name, value;
    const getuserdate = (event) => {
        // eslint-disable-next-line no-label-var
        // eslint-disable-next-line no-unused-labels
        name = event.target.name;
        value = event.target.value;

        setuser({ ...user, [name]: value });
    };

    const postData = async (e) => {

        e.preventDefault();

        const { name, email, phone, addersh, experience, profession, } = user;
        const res = await fetch("https://idigitalpreneur-contact-from-default-rtdb.firebaseio.com/idigitalpreneurcontactfrom.json",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                // eslint-disable-next-line no-undef
                body: Json.stringify({
                    name,
                    email,
                    phone,
                    addersh,
                    experience,
                    profession,
                })

            })

    }
    return (
        <div>
            <form method='POST'>
                <div class="container from-control mt-5">
                    <div className="row">

                        <div className="col-md-6">
                            <input type="text" name="name" id="" class="form-control" value={user.name} onChange={getuserdate} placeholder=" your name" aria-describedby="helpId" required aut />
                            <input type="number" name="phone" id="" class="form-control" value={user.phone} onChange={getuserdate} placeholder="mobile" aria-describedby="helpId" required />
                            <input type="experience" name="experience" id="" class="form-control" value={user.experience} onChange={getuserdate} placeholder="your experience" aria-describedby="helpId" required autoComplete='off' />
                        </div>
                        <div className="col-md-6">
                            <input type="email" name="email" id="" class="form-control" value={user.email} onChange={getuserdate} placeholder="E-mail" aria-describedby="helpId" required />
                            <input type="text" name="profession" id="" class="form-control" value={user.profession} onChange={getuserdate} placeholder="your profession" aria-describedby="helpId" required autoComplete='off' />
                            <input type="text" name="addersh" id="" class="form-control" value={user.addersh} onChange={getuserdate} placeholder="addersh" aria-describedby="helpId" required />
                            <button type="reset" value="submit" className='ms-4 btn btn-outline'><i class="fa fa-repeat" aria-hidden="true"></i></button>

                        </div>
                        <button type="submit" onClick={postData} className='btn btn-primary py-3 mt-4' >Request</button>



                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contactdata
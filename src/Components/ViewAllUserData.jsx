import React, { useEffect, useState } from 'react'
import UserDataNavbar from './UserDataNavbar'
import axios from 'axios'

const ViewAllUserData = () => {

    const [UserData, setUserData] = useState(
        { "users": [], }
    )

    const fetchData = () => {
        axios.get("https://dummyjson.com/users").then(
            (response) => {
                setUserData(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <UserDataNavbar />
            <div className="container">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">

                        {UserData.users.map(
                            (value, index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.id}</h5>
                                                <p class="card-text">{value.firstName}</p>
                                                <p class="card-text">{value.lastName}</p>
                                                <p class="card-text">{value.maidenName}</p>
                                                <p class="card-text">{value.age}</p>
                                                <p class="card-text">{value.gender}</p>
                                                <p class="card-text">{value.email}</p>
                                                <p class="card-text">{value.phone}</p>
                                                <p class="card-text">{value.username}</p>
                                                <p class="card-text">{value.password}</p>
                                                <p class="card-text">{value.birthDate}</p>
                                                <p class="card-text">{value.bloodGroup}</p>
                                                <p class="card-text">{value.height}</p>
                                                <p class="card-text">{value.weight}</p>
                                                <p class="card-text">{value.eyeColor}</p>
                                                <p class="card-text">{value.hair.color}</p>
                                                <p class="card-text">{value.hair.type}</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllUserData
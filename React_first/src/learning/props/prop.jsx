//jab bhi react mein data ko ek componenets se dusre mein transfer kerna hota hai tab hum props ka use kerte hai

function User({user}){
     return(
        <div>
            <h2>Name of Person {user.name}</h2>
            <br />
            <h2>Age of the Person is {user.age}</h2>
            <br />
            <h2>Cuteness of the person is {user.Cute}</h2>
            <hr />
        </div>
     )
}



export default User
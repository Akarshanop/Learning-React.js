const name="Akarshan Tyagi"
function Event(){
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={hello}>Press Me</button>
            <br />
            <br />
            <button onClick={()=>fruit("Guava")}>Fruit</button>
        </div>
    )
}
//never call any function as hello() it should be written as hello.
function hello(){
    alert(`Hi Myself  ${name}` )
}
const fruit=(Fruit)=>{
    alert(`Favourite Fruit is ${Fruit}`)
}
export default Event
import Wrapper from "./Wrapper"
function User(){
    return(
        <div>
            <Wrapper color="Orange">
            <h1>Hello Hero</h1>
            </Wrapper>
            <hr />
            <Wrapper>
            <h1>Hello Snigdha</h1>
            </Wrapper>
            <hr />
            <Wrapper color="blue">
            <h1>Hello Admin 
            </h1>
            <h2 style={{color:"red"}}>Please Login</h2>
            </Wrapper>
        </div>
    )
}
export default User 
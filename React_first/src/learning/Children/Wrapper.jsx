function Wrapper({children,color="Green"}){
    return(
        <div style={{color:color, border:"5px solid", width:"300px",margin:"10px"}}>
            {children}
        </div>
    )
}
export default Wrapper 
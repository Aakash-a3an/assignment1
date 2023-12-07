function Click (){

    function clickLog(data)
    {
    console.log("You Clicked Me" + data)
    }

    return(
            <button className="btn" onClick={()=>{clickLog(" User")}}>Click Me!</button>
    )

}

export default Click;
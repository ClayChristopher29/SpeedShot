import React, {Component} from"react"

class Login extends Component{


// setting initial state

state = {
    email:"",
    password:""
}
// update to state whenever there is a field change.
handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id]=evt.target.value
    this.setState(stateToChange)
}
handleLogin =(e)=> {
    e.preventDefault()
    localStorage.setItem(
        "userId",
        JSON.stringify({
            email:this.state.email,
            password:this.state.password
        })
    )
    this.props.history.push("/home");
    }
    render(){
        return (
            <form onSubmit={this.handleLogin}>
                <fieldet>
                    <h3>Please Sign In</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type ="email"
                        id = "email"
                        placeholder="Email Address"
                        required="" autoFocus=""/>
                        <label htmlFor="inputEmail"> E-Mail Address</label>
<input onChange ={this.handleFieldChange} type="password"
id="password"
required=""/>
<label htmlFor="inputPassword">Input Password</label>
                    </div>
                    <button type ="submit">
                        Sign In
                    </button>
                </fieldet>
            </form>
        )
    }
}


export default Login
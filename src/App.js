import React from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isDiabetic: false
            
            
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="number"
                        value={this.state.age}
                        name="age" 
                        placeholder="Age" 
                        onChange={this.handleChange}
                    /><br 
                    />
                    
                     <label>Gender Options:</label>
                    <br />
                    <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />Male
                    </label>
                    
                    
                    <br />
                    <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />Female
                    </label>
                    <br />
                    
                    <br />
                    
                     <label>Destination:</label>
                <select 
                    name="destination"
                    value={this.state.destination} 
                    onChange={this.handleChange}
                >
                    <option value="" >--Please choose a destination--</option>
                    <option value="Mars" >Mars</option>
                    <option value="Luna" >Luna</option>
                    <option value="Venus" >Venus</option>
                </select>
                    <br />
                    
                    <label>Dietary restrictions:</label>
                    <br />
                    <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        checked={this.state.isVegan}
                        onChange={this.handleChange}
                    /> Vegan?
                    </label>
                    <br />
                    <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        checked={this.state.isKosher}
                        onChange={this.handleChange}
                    /> Kosher?
                    </label>
                    <br />
                    <label>
                    <input 
                        type="checkbox"
                        name="isDiabetic"
                        checked={this.state.isDiabetic}
                        onChange={this.handleChange}
                    /> Diabetic?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Diabetic: {this.state.isDiabetic ? "Yes" : "No"}</p>

            </main>
        )
    }
}

   


export default App
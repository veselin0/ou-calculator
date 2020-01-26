import React from "react"

class App extends React.Component {

    calc(a, b) {
        let sub = a + b
        if (sub > 2) {
            return 0.5
        } else {
            return -0.5
        }
    }

   calc1(a, b) {
        if (a && b > 0) {
            return 0.75
        } else {
            return -0.75
        }
   }

   sub(a, b) {
       return this.calc(a, b) + this.calc1(a, b)
   }
   
   total() {
       return (
        this.sub(Number(this.state.result1), Number(this.state.result2)) + 
        this.sub(Number(this.state.result3), Number(this.state.result4)) +
        this.sub(Number(this.state.result5), Number(this.state.result6)) +
        this.sub(Number(this.state.result7), Number(this.state.result8)) +
        this.sub(Number(this.state.result9), Number(this.state.result10)) +
        this.sub(Number(this.state.result11), Number(this.state.result12)) +
        this.sub(Number(this.state.result13), Number(this.state.result14)) +
        this.sub(Number(this.state.result15), Number(this.state.result16)) 
       )
   }

   stake() {
       return this.total() / 10
    }

    constructor() {
        super()
        this.state = {
            result1: "",
            result2: "",
            result3: "",
            result4: "",
            result5: "",
            result6: "",
            result7: "",
            result8: "",
            result9: "",
            result10: "",
            result11: "",
            result12: "",
            result13: "",
            result14: "",
            result15: "",
            result16: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    


    render() {
        return (
            <div>
                <h1>Over / Under 2.5 Calculator</h1>
                <main>
                    <form>
                        <p>We take into consideration the last 4 matches of each team involved in the current game (that’s 8 matches in total) </p>
                        <h2>Team 1</h2>
                        
                        <input 
                            type="number"
                            value={this.state.result1}
                            name="result1"
                            placeholder="result1" 
                            onChange={this.handleChange}
                            autoFocus
                        />
                        
                        <input 
                            type="number"
                            value={this.state.result2}
                            name="result2"
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            type="number"
                            value={this.state.result3}
                            name="result3" 
                            placeholder="result2" 
                            onChange={this.handleChange}
                        />
                        
                        
                        <input
                            type="number"
                            value={this.state.result4}
                            name="result4" 
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        
                        
                        <br />
                        <input 
                            type="number"
                            value={this.state.result5}
                            name="result5"
                            placeholder="result3" 
                            onChange={this.handleChange}
                        />
                        
                        <input 
                            type="number"
                            value={this.state.result6}
                            name="result6"
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            type="number"
                            value={this.state.result7}
                            name="result7" 
                            placeholder="result4" 
                            onChange={this.handleChange}
                        />
                        
                        
                        <input
                            type="number"
                            value={this.state.result8}
                            name="result8" 
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        
                        
                        <br />
                        <br />

                        <h2>Team 2</h2>
                        
                        <input 
                            type="number"
                            value={this.state.result9}
                            name="result9"
                            placeholder="result1" 
                            onChange={this.handleChange}
                        />
                        
                        <input 
                            type="number"
                            value={this.state.result10}
                            name="result10"
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            type="number"
                            value={this.state.result11}
                            name="result11" 
                            placeholder="result2" 
                            onChange={this.handleChange}
                        />
                        
                        
                        <input
                            type="number"
                            value={this.state.result12}
                            name="result12" 
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        
                        
                        <br />
                        <input 
                            type="number"
                            value={this.state.result13}
                            name="result13"
                            placeholder="result3" 
                            onChange={this.handleChange}
                        />
                        
                        <input 
                            type="number"
                            value={this.state.result14}
                            name="result14"
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            type="number"
                            value={this.state.result15}
                            name="result15" 
                            placeholder="result4" 
                            onChange={this.handleChange}
                        />
                        
                        
                        <input
                            type="number"
                            value={this.state.result16}
                            name="result16" 
                            placeholder="" 
                            onChange={this.handleChange}
                        />
                        
                        <br />
                        <br />
                        
                        <button>Reset</button>
                        
                    </form>
                    <hr />
                    <h2>Result:</h2>
                    
                    <h3>total: {this.total()} points</h3>
                    <p>When the result is positive we play Over 2.5 and vice versa</p>
                    <h3>stake: {Math.abs(this.stake())}</h3>
                    <p>It is recommended to place a bet only if we get +/- 5 points.
                        That would mean to put a 5/10 units bet on over 2.5 goals
                        if we have 5 points. 
                    </p>
                    <br />
                

                    <a target="_blank" href="https://www.online-betting.me.uk/strategies/vincent">Learn more:</a>

                    

                </main>
            </div>
        )
    }
}

   


export default App
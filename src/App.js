import React from "react"

class App extends React.Component {

    state = {
        listOfResults: new Array(8)
            .fill([])
            .map(() => ['', '']),
    };

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
        const result = this.state.listOfResults.reduce((total, next) => {
            // 1   // 2
            const [goalsA, goalsB] = next;
            const subResult = this.sub(goalsA, goalsB);

            const newTotal = total + subResult;

            return newTotal;

        }, 0);

        return result;
    }

    stake() {
        return this.total() / 10
    }

    handleChange = (value, index, innerIndex) => {

        const {listOfResults} = this.state;
        const newList = Array.from(listOfResults);
        newList[index][innerIndex] = Number(value);

        this.setState({listOfResults: newList});
    };

    render() {
        const {listOfResults} = this.state;

        return (
            <div>
                <h1>Over / Under 2.5 Calculator</h1>
                <main>
                    <form>
                        <p>We take into consideration the last 4 matches of each team involved in the current game
                            (that’s 8 matches in total) </p>

                        <TeamResults name="Team 1"
                                     results={listOfResults}
                                     onChange={this.handleChange}
                                     sliceStart={0}
                                     sliceSize={4} />

                        <br/>

                        <TeamResults name="Team 2"
                                     results={listOfResults}
                                     onChange={this.handleChange}
                                     sliceStart={4}
                                     sliceSize={4}/>

                        <br/>

                        <button>Reset</button>
                    </form>

                    <hr/>

                    <h2>Result:</h2>

                    <h3>total: {this.total()} points</h3>
                    <p>When the result is positive we play Over 2.5 and vice versa</p>
                    <h3>stake: {Math.abs(this.stake())}</h3>
                    <p>It is recommended to place a bet only if we get +/- 5 points.
                        That would mean to put a 5/10 units bet on over 2.5 goals
                        if we have 5 points.
                    </p>

                    <br/>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.online-betting.me.uk/strategies/vincent">Learn more:</a>


                </main>
            </div>
        )
    }
}

const TeamResults = ({name, results, onChange, sliceStart, sliceSize}) => {
    return (
        <React.Fragment>
            <h2>{name}</h2>

            {
                results
                    .slice(sliceStart, sliceStart + sliceSize)
                    .map((pair, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    pair.map((score, innerIndex) => {
                                        return (
                                            <input
                                                key={innerIndex}
                                                type="number"
                                                value={score}
                                                name={'result' + (index + 1)}
                                                placeholder={innerIndex === 1 ? '' : 'result' + (index + 1)}
                                                onChange={(e) => onChange(e.target.value, sliceStart + index, innerIndex)}
                                                autoFocus={sliceStart + index + innerIndex === 0}/>
                                        )
                                    })
                                }

                                <br/>
                            </ React.Fragment>
                        )
                    })
            }
        </ React.Fragment>
    )
};

export default App;

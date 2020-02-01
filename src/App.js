import React from "react"

class App extends React.Component {

    state = { results: new Array(16).fill('') };

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
        return toPairs(this.state.results).reduce((total, next) => {
            const [goalsA, goalsB] = next;
            const subResult = this.sub(goalsA, goalsB);

            return total + subResult;
        }, 0);
    }

    stake() {
        return this.total() / 10
    }

    onFormChange = (e) => {
        const formData = new FormData(e.currentTarget);
        const results = Array.from(formData.values()).map(val => Number(val));
        this.setState({ results });
    };

    render() {
        return (
            <div>
                <h1>Over / Under 2.5 Calculator</h1>
                <main>
                    <form onChange={this.onFormChange}>
                        <p>We take into consideration the last 4 matches of each team involved in the current game
                            (that’s 8 matches in total) </p>

                        <TeamResults name="Team 1" />

                        <br/>

                        <TeamResults name="Team 2" />

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

const TeamResults = ({name, gamesCount = 4 }) => {
    return (
        <React.Fragment>
            <h2>{name}</h2>

            {
                new Array(gamesCount * 2)
                    .fill(1)
                    .map((result, index) => {
                        return (
                            <React.Fragment key={index}>
                                <input
                                    type="number"
                                    name={'result' + (index + 1)}
                                    placeholder={index % 2 === 0 ? 'result' + ((index / 2) + 1): ''}
                                    autoFocus={index === 0}/>

                                { index % 2 === 1 && <br/> }
                            </ React.Fragment>
                        )
                    })
            }
        </ React.Fragment>
    )
};

function toPairs(array) {
    const pairs = [];

    for (let i = 0; i < array.length; i += 2) {
        const nextPair = array.slice(i, i + 2);
        pairs.push(nextPair);
    }

    return pairs;
}

export default App;

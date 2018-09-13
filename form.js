import React, { Component } from 'react';
import Text from './text';
const blah = "something"

class Form extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.print = this.print.bind(this);
    }

    print(x) {

        console.log(x)
    }
    render() {
        const list = [12, 12, 1, 21, 321, 23, 132, 132, 132, 13, 21]
        const name = "najam shehzad"
        return (
            <div>
                <h1>
                    This is Text
                </h1>
                <Text name={name} print={this.print} list={list} />

            </div>
        )
    }


}
export default Form;
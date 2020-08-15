import React, { Component } from 'react';
// import styles from './Form.css'

class Form extends Component {
    // state = {
    //     name: '',
    //     email: '',
    //     phone: '',
    //     city: '',
    //     country: ''
    // }

    render() {
        return (
            <div>
                <form>
                    <label >Name:</label><br />
                    <input type="text" name="name" /><br />

                    <label >Email:</label><br />
                    <input type="email" name="email" /><br />

                    <label >Phone No.:</label><br />
                    <input type="tel" name="phone" /><br />

                    <label >City:</label><br />
                    <input type="text" name="city" /><br />

                    <label >Country:</label><br />
                    <input type="text" name="country" /><br />

                    <button>SUBMIT</button>
                </form >
            </div >
        )
    }
}
export default Form;
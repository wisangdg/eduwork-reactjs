import React from "react";


export default class Form extends React.Component {
    render () {
        return (
            <form>
            <label>
                Email/username: <br /><input type="email" /> <br />
            </label>
            <label>
                Password: <br /><input type="password" /> <br/>
            </label>
            <label>
            <button type="submit">Login</button>
            </label>
        </form>
        )
    }
}
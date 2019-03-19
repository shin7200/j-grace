import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return(
            <div className="nav-container">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#">링크</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">링크</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">링크</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">링크</a>
                    </li>
                </ul>
            </div>
        )
    }
}
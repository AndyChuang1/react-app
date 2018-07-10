import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap'
import './nameCard.css';
import picture from "../../../imag/fly.gif"
class Card extends React.Component {
    contents() {
        return this.props.contents.map(function (contentsInfo,index) {
            return (
                <li className="update" key={index}>
                    {contentsInfo.status}
                </li>
            )
        });
    }

    cards() {
        return this.props.contents.map(function (contentsInfo, index) {
            return (
                <div className="card col-3" key={index}>
                    <img className="card-img-top" src={require('../../../imag/fly.gif')} alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">{contentsInfo.title}</h3>
                        <div className="contents">
                            <ul>
                                <li>
                                    {contentsInfo.status}
                                </li>
                            </ul>

                        </div>
                        <Button bsStyle="success">Success</Button>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="row">
                <div className="card col-3" >
                    <img className="card-img-top" src={require('../../../imag/fly.gif')} alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">{this.props.name}</h3>
                        <div className="contents">
                            <ul>
                                {this.contents()}
                            </ul>

                            <ul>
                                {this.props.contents.map((contents, index) =>
                                    <li key={index}> {contents.state}    </li>

                                )}

                            </ul>
                        </div>
                        <Button bsStyle="success">Success</Button>
                    </div>
                </div>
                {this.cards()}
            </div>
           

                )
        }

}
export default Card;
import React, { Component } from 'react'
import frontImg from './icons8_Perspective_View.svg'

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    clicked(item) {
        this.props.click(item);
    }
    render() {
        return (
            <div className={'card' + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={()=>{this.clicked(this.props.item)}}>
                <div className="front">
                    <img src={frontImg} alt=""/>
                </div>
                <div className="back">
                    <img src={"http://img.hasanerdal.xyz/img/icons8_"+this.props.item+".svg"}/>
                </div>
            </div>
        )
    }
}

export default Card

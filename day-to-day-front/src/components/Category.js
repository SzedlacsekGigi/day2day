import React, {Component} from "react";
import {Redirect} from "react-router-dom";


const style = {
    buttonStyle: {
        height: '200px',
        width: '200px',
        fontFamily: 'Anton',
    },
    buttonTextStyle: {
        fontSize: '33px',
        padding: '80px 0',
        textAlign: 'center'
    },
    iconStyle: {
        fontSize: '60px',
        top: '50%',
        left: '40%'
    }
};

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    chooseIcon(categoryName){
        if(categoryName === "Physical"){
            return "fitness_center"
        } else if (categoryName === "Mental"){
            return "spa"
        } else if (categoryName === "Mind"){
            return "emoji_objects"
        } else if (categoryName === "Social"){
            return "people"
        } else if (categoryName === "Surroundings"){
            return "nature_people"
        } else if (categoryName === "Tasks"){
            return "list_alt"
        }
    }

    onMouseEnterHandler() {
        this.setState({isHovered: true});
    }

    onMouseLeaveHandler() {
        this.setState({isHovered: false});
    }


    state = {
        redirect: false,
        url: ""
    };

    onClick = (e) => {
        e.preventDefault();
        this.setState({url: '/subcategory/' + [e.currentTarget.value]});
        this.setState({redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to={{pathname: this.state.url}}/>
        }
    };

    render() {
        return (
            <div className="category">
                {this.renderRedirect()}
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={this.onClick} value={this.props.category.categoryName}
                         style={style.buttonStyle}  onMouseEnter={this.onMouseEnterHandler}
                         onMouseLeave={this.onMouseLeaveHandler}>
                        {this.state.isHovered ? <p style={style.buttonTextStyle}>{this.props.category.categoryName}</p> :
                            <i style={style.iconStyle} className="material-icons">{this.chooseIcon(this.props.category.categoryName)}</i>}
                    </button>
            </div>
        );
    }
}

export default Category;
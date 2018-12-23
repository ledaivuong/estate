import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Item extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={item.backgroundImage}
                                     alt="true"/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{item.project}</a>
                        </h4>
                        <h5>{item.owner}</h5>
                        <p className="card-text">{item.content.length > 200 ? item.content.substr(0,170) + "..." : item.content}</p>
                    </div>
                    <div className="card-footer p-0">
                        <Link onClick={this.forceUpdate} to="/item"><button className="btn btn-block btn-success">Xem chi tiết</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
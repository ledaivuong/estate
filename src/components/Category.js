import React, {Component} from 'react';

class Category extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <h1 className="my-4">Tên Website</h1>
                <div className="list-group">
                    <a href="#" className="list-group-item">Quận 1</a>
                    <a href="#" className="list-group-item">Quận 2</a>
                    <a href="#" className="list-group-item">Quận 3</a>
                </div>
            </div>
        );
    }
}

export default Category;
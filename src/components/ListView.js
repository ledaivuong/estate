import React, {Component} from 'react';
import Item from './Item.js'
class ListView extends Component {
    render() {
        const {items, getItem} = this.props;
        let elmItem = items.map((item, index) => {
            return <Item
                item={item}
                key={index}
                getItem={getItem}
            />
        });
        return (
            <div className="row">
                {elmItem}
            </div>
        );
    }
}

export default ListView;
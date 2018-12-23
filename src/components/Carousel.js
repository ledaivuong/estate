import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        const {items} = this.props;
console.log(items);
        return (
            <div id="carouselExampleIndicators" className="carousel slide my-4"
                 data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0}
                        className="active"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to={1}/>
                    <li data-target="#carouselExampleIndicators" data-slide-to={2}/>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={items[0].backgroundImage}
                             alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={items[1].backgroundImage}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={items[2].backgroundImage}
                             alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;
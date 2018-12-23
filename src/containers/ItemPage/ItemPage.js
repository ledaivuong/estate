
import './ItemPage.css';
import React, {Component} from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';

class ItemPage extends Component {
    render() {
        return (
            <div id="#page-top">
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#Top">Top page</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#TongQuan">Tổng Quan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#ViTri">Vị Trí</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#MatBang">Mặt Bằng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#ChuDauTu">Chủ Đầu Tư</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#PhoiCanh">Phối Cảnh</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section id="Top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*<div className="container text-center">*/}
                                {/*<h1>Welcome to Scrolling Nav</h1>*/}
                                {/*<p className="lead">A landing page template freshly redesigned for Bootstrap 4</p>*/}
                                {/*</div>*/}
                                <div id="carouselId" className="carousel slide my-4" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselId" data-slide-to={0} className="active"/>
                                        <li data-target="#carouselId" data-slide-to={1}/>
                                        <li data-target="#carouselId" data-slide-to={2}/>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="./resources/images/phoicanh/img142.jpg"
                                                 alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="./resources/images/phoicanh/img144.jpg"
                                                 alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="./resources/images/phoicanh/img146.jpg"
                                                 alt="Third slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                                {/*<Carousel/>*/}
                            </div>
                        </div>
                    </div>
                </section>


                <section id="TongQuan">
                    <div className="container">
                        <h2>Tổng quan dự án</h2>
                        <div className="row">
                            <div className="col-lg-4 mx-auto float-left">
                                <ul className="TongQuan">
                                    <li><strong>Tên căn hộ: </strong>Hậu Giang Pearl Plaza</li>

                                    <li><strong>Chủ đầu tư: </strong>Liên doanh Phú Cường - Lotte</li>
                                    <li><strong>Vị trí: </strong>Thạnh Mỹ Lợi, Quận 2, Tp.HCM</li>
                                    <li><strong>Diện tích: </strong>1.6 ha</li>
                                    <li><strong>Chiều cao: </strong>2 block cao 24 tầng</li>
                                    <li><strong>Dự kiến hoàn thành: </strong>4/2020</li>
                                    <li><strong>Dự kiến mở bán: </strong>Cuối tháng 11/2018</li>
                                </ul>
                            </div>
                            <div className="col-lg-8 mx-auto float-right">
                                <img className="d-block img-fluid" src="./resources/images/HauGiangBackGround.jpg"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="ViTri">
                    <div className="container">
                        <h2>Vị trí dự án</h2>
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/vitri.gif"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="MatBang">
                    <div className="container">
                        <h2>Mặt bằng căn hộ</h2>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/matbang/matBang1.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/matbang/matBang2.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/matbang/matBang3.jpg"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="ChuDauTu">
                    <div className="container">
                        <h2>Chủ đầu tư</h2>
                        <h3>Phú Cường</h3>
                        <div className="row d-inline-block">
                            <div className="col-lg-6 mx-auto float-left">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"/>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                            <div className="col-lg-6 mx-auto float-right">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"></img>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                        </div>
                        <div className="row d-inline-block">
                            <div className="col-lg-6 mx-auto float-left">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"></img>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                            <div className="col-lg-6 mx-auto float-right">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"></img>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                        </div>
                        <h3>Lotte</h3>
                        <div className="row d-inline-block">
                            <div className="col-lg-6 mx-auto float-left">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"></img>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                            <div className="col-lg-6 mx-auto float-right">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"></img>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                        </div>
                        <div className="row d-inline-block">
                            <div className="col-lg-6 mx-auto float-left">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"></img>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                            <div className="col-lg-6 mx-auto float-right">
                                <img className="d-block img-fluid" src="./resources/images/123.jpg"></img>
                                <p>Đầu tư vào các dự án phát triển đô thị, nhà ở tại TP.HCM và khu vực ĐBSCL.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="PhoiCanh">
                    <div className="container">
                        <h2>Phối cảnh</h2>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img142.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img144.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img146.jpg"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img148.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img150.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img152.jpg"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img154.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img157.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img159.jpg"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img161.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img163.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img165.jpg"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img167.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img169.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img171.jpg"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img173.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img175.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img179.jpg"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img181.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img183.jpg"/>
                            </div>
                            <div className="col-lg-4 mx-auto">
                                <img className="d-block img-fluid" src="./resources/images/phoicanh/img185.jpg"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Code by ledaivuong1990@gmail.com</p>
                    </div>
                    {/* /.container */}
                </footer>

            </div>

        );
    }
}

export default ItemPage;
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '.././App.css';
// import { Container, Row, Col } from 'reactstrap';
// import { ActionRowing } from 'material-ui';



// // const items = [
// //   {

// // src:'book1.jpg'  ,  altText: 'Slide 1',
// //     caption: 'Slide 1'
// //   },
// //   {
// //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
// //     altText: 'Slide 2',
// //     caption: 'Slide 2'
// //   },
// //   {
// //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
// //     altText: 'Slide 3',
// //     caption: 'Slide 3'
// //   }
// // ];

// // export default class Example extends Component {
// //   constructor(props) {
// //     super(props);
// //     // this.state = { activeIndex: 0 };
// //     // this.next = this.next.bind(this);
// //     // this.previous = this.previous.bind(this);
// //     // this.goToIndex = this.goToIndex.bind(this);
// //     // this.onExiting = this.onExiting.bind(this);
// //     // this.onExited = this.onExited.bind(this);
// //   }

// //   // onExiting() {
// //   //   this.animating = true;
// //   // }

// //   // onExited() {
// //   //   this.animating = false;
// //   // }

// //   // next() {
// //   //   if (this.animating) return;
// //   //   const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
// //   //   this.setState({ activeIndex: nextIndex });
// //   // }

// //   // previous() {
// //   //   if (this.animating) return;
// //   //   const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
// //   //   this.setState({ activeIndex: nextIndex });
// //   // }

// //   // goToIndex(newIndex) {
// //   //   if (this.animating) return;
// //   //   this.setState({ activeIndex: newIndex });
// //   // }

// //   render() {
// //     // const { activeIndex } = this.state;

// //     // const slides = items.map((item) => {
// //     //   return (
// //     //     <CarouselItem
// //     //       onExiting={this.onExiting}
// //     //       onExited={this.onExited}
// //     //       key={item.src}
// //     //     >
// //     //       <img src={item.src} alt={item.altText} className="img-fluid" />
// //     //       <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
// //     //     </CarouselItem>
// //     //   );
// //     // });

// //     return (
// //         <Container>
// // ActionRowing
// //                 <Row>
// //                     <Col sm="12" className ="abc">
// //                     <Carousel>
// //   <Carousel.Item>
// //     <img width={900} height={500} alt="900x500" src="/carousel.png" />
// //     <Carousel.Caption>
// //       <h3>First slide label</h3>
// //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// //     </Carousel.Caption>
// //   </Carousel.Item>
// //   <Carousel.Item>
// //     <img width={900} height={500} alt="900x500" src="/carousel.png" />
// //     <Carousel.Caption>
// //       <h3>Second slide label</h3>
// //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //     </Carousel.Caption>
// //   </Carousel.Item>
// //   <Carousel.Item>
// //     <img width={900} height={500} alt="900x500" src="/carousel.png" />
// //     <Carousel.Caption>
// //       <h3>Third slide label</h3>
// //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
// //     </Carousel.Caption>
// //   </Carousel.Item>
// // </Carousel>;
// //       {/* <Carousel
// //         activeIndex={activeIndex}
// //         next={this.next}
// //         previous={this.previous}
// //         keyboard={false}
// //         pause={false}
// //         ride="carousel"
// //         interval="2000"
// //         slide={false}
// //         className="carousel-fade"
// //       >
// //         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
// //         {slides}
// //         <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
// //         <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
// //       </Carousel> */}
// //       </Col>
// //       </Row>
// //       </Container>
// //     );
// //   }
// // }
//  export default class ControlledCarousel extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleSelect = this.handleSelect.bind(this);

//     this.state = {
//       index: 0,
//       direction: null
//     };
//   }

//   handleSelect(selectedIndex, e) {
//     alert(`selected=${selectedIndex}, direction=${e.direction}`);
//     this.setState({
//       index: selectedIndex,
//       direction: e.direction
//     });
//   }

//   render() {
//     const { index, direction } = this.state;

//     return (
//       <Carousel
//         activeIndex={index}
//         direction={direction}
//         onSelect={this.handleSelect}
//       >
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img width={900} height={500} alt="900x500" src="/carousel.png" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel >
//     );
//   }
// }



import React,{Component} from 'react';
import Book1 from './1.png';
import Book2 from './hhhh.png';
import Book3 from './3.png';
import Book4 from './4.png';
import Book5 from './5.png';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (     <div className="container">
      <div className="row">
      <div className="col-xs-12">
      <p className="intro"><span>IMPORTANCE OF BOOK</span><br/>Books plays an important role in in our life. It is said that books are our best companions. Books are our friends in a real sense. They demand nothing from us. They give us plenty of joy. We also learn a lot from them. They take us into a different world of imagination.

A books consists of long written work consisting of several pages. It may be published form either in physical form or in electronic form.</p>
      </div>

{/* //        <div className="col-sm-8 ">
//        <div className="slider"> 

//  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//    <div className="carousel-inner">
//      <div className="carousel-item active">
//        <img className="d-block w-100 ima" src={Book1} alt="First slide" />
//      </div>
//      <div className="carousel-item">
//        <img className="d-block w-100 ima" src={Book2} alt="Second slide"/>
//      </div>
//      <div className="carousel-item">
//        <img className="d-block w-100 ima" src={Book3} alt="Third slide"/>
//      </div>
//  <div className="carousel-item">
//        <img className="d-block w-100 ima" src={Book4} alt="Third slide"/>
//      </div>
//    </div>
//   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//    <span className="sr-only">Previous</span>
//    </a>
//   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//    <span className="sr-only">Next</span>
//    </a>
//  </div>     </div> </div> */}

</div></div>       
    );
  }
}
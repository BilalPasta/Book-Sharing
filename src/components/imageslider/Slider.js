import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import Slider from 'react-animated-slider';
//slider images
import SliderImage1 from '../images/slide1.png';
import SliderImage2 from '../images/slide2.png';
import SliderImage3 from '../images/slide3.png';
import SliderImage4 from '../images/slide4.png'
import 'react-animated-slider/build/horizontal.css';
// import 'normalize.css/normalize.css';
import './slider-animations.css';
import './style.css';
import Logo from '../images/logoimage.png';

const content = [
	{
		title: 'SHARING IS HAPPINESS, SPREAD HAPPINESS',
		// description:'We provide excellence software that can tweak your business into a bunch of lines.',
		// button: 'Read More',
		image: SliderImage1,
		user: 'CodingTier',
		userProfile: Logo
	},
	{
		title: 'SHARE BOOK WITH YA FELLAS',
		// description:'We provide excellence software that can tweak your business into a bunch of lines.',
		// button: 'Read More',
		image: SliderImage2,
		user: 'CodingTier',
		userProfile: Logo
	},
	{
		title: 'EXCESS OF BOOK , GET RID AND GET PAID',
		// description:'Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business.'
		
		// button: 'Discover',
		image: SliderImage3,
		user: 'CodingTier',
		userProfile: Logo
	},
	{

		title: 'INDEED QURAN IS THE BEST BOOK IN THE WORLD',
		// description:
		// "A successful website does three things: \n\n It attracts the right kinds of visitors.	Guides them to the main services or product you offer.	Collect Contact details for future ongoing relation",
		// button: 'Buy now',
		image: SliderImage4,
		user: 'CodingTier',
		userProfile: Logo
		
	}
];

const ImageSlider = () => (
	<div >
	  {/* <ScrollableAnchor id={'home'}> */}
	  <div>
		  </div>
      {/* </ScrollableAnchor> */}
		<Slider  
		touchDisabled ={true}
		autoplay={300}
	
		 className="slider-wrapper"
		 >
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						{/* <button>{item.button}</button> */}
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							 <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
		
	</div>
);

export default ImageSlider;

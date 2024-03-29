import React from "react";

// Client
import client from '../lib/client';
import { urlFor } from '../lib/client';

// Next
import Link from 'next/link';

const HeroBanner = ({ heroBanner }) => {

    return (<div className="hero-banner-container">
		<div>
			<p className="beats-solo">
				{ heroBanner.smallText }
			</p>
			<h3 className="">
				{ heroBanner.midText }
			</h3>
			<h1 className="">
				{ heroBanner.largeText1 }
			</h1>
			<img src={urlFor(heroBanner?.image)} alt="headphones" className="hero-banner-image" />
			<div>
				<Link href={`/products/${heroBanner.product}`}>
					<button type="button">
						{ heroBanner.buttonText }
					</button>
				</Link>
				<div className="desc">
					<h5>
						Description
					</h5>
					<p>
						{ heroBanner.desc }
					</p>
				</div>
			</div>
		</div>
	</div>);
};

export default HeroBanner;

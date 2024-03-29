import React from 'react';

// Components
import { Product, HeroBanner, FooterBanner } from '../components';

// Client
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
	return (
		<div>
			<HeroBanner heroBanner={bannerData?.length && bannerData[0]} />

			<div className="products-heading">
				<h2>
					Best Selling Products
				</h2>
				<p>
					Speakers of many variations
				</p>
			</div>
			<div className="products-container">
				{
					products?.map((product) => (
						<Product key={product._id} product={product} />
					))
				}
			</div>
			<footer>
				<FooterBanner footerBanner={bannerData && bannerData[0]} />
			</footer>
		</div>
	)
}

export async function getServerSideProps() {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData }
	}
}

export default Home;

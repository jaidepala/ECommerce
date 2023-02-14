import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    // projectId: process.env.NEXT_SANITY_PROJECT_ID,
    projectId: 'zrxv32on',
    dataset: 'production',
    apiVersion: '2022-11-21',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

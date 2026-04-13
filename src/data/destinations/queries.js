export const Hero_Query = `
   	hero: heroComponent {
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Intro_Icon_Query = `
   	introIcon: iconIntroComponent {
        title
        content
        icon {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Content_Links_Query = `
   	contentLinks: contentLinksComponent {
        content
        buttons {
            text
            link {
                edges {
                    node {
                        uri
                    }
                }
            }
        }
    }
`;

export const Location_Map_Query = `
   	 locationMap: locationMapComponent {
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
        mapAreaImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

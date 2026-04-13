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

export const Image_Row_Query = `
   	imageRow: imageRowComponent {
        imageOne {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        imageTwo {
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

export const Outro_Hero_Query = `
   	outroHero: outroHeroComponent {
    content
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

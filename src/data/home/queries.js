export const Hero_Intro_Query = `
   	 heroIntro: heroIntroComponent {
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

export const Intro_Points_Query = `
   	 introPoints: introPointsComponent {
        title
        subTitle
        points {
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
    }
`;

export const Page_Cta_Query = `
   	 pageCta: pageCtaComponent {
        title
        subTitle
        content
        buttonOneText
        buttonOneLink {
            edges {
                node {
                    uri
                }
            }
        }
        buttonTwoText
        buttonTwoLink {
            edges {
                node {
                    uri
                }
            }
        }
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

export const About_Intro_Query = `
   	 aboutIntro: aboutIntroComponent {
        title
        content
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
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

export const Gallery_Query = `
   	 gallery: galleryComponent {
        content
        mainHeroImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        imageGallery {
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
    }
`;

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

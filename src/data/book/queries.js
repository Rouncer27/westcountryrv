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

export const Bold_Intro_Query = `
   	boldIntro: boldIntroComponent {
        title
        subTitle
        subTitleTwo
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

export const Mountain_Callout_Query = `
   	mountainCallout: mountainCalloutComponent {
        content
    }
`;

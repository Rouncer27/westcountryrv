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

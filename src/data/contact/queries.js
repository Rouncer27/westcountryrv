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

export const Intro_Links_Query = `
   	introLinks: introLinksComponent {
        title
        content
        buttonOneText
        buttonTwoText
        buttonOneLink {
            edges {
                node {
                    uri
                }
            }
        }
        buttonTwoLink {
            edges {
                node {
                    uri
                }
            }
        }
    }
`;

export const Contact_Form_Display_Query = `
   	contactFormDisplay: contactFormDisplayComponent {
        displayContactForm
        content
    }
`;

export const Address_Query = `
   	address: addressComponent {
        address
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

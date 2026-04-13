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

export const About_Us_Query = `
   	aboutUs: aboutUsComponent {
        title
        content
    }
`;

export const Content_Links_Query = `
   	contentLinks: contentLinksComponent {
        title
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

export const About_Bio_Query = `
   	aboutBio: aboutBioComponent {
        title
        bio
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
        imageThree {
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

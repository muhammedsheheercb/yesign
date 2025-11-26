// Mock reviews data for YESIGN Creative Agency
// Reviews from Malayalee clients

export interface Review {
  rating: number;
  text: { text: string };
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
  relativePublishTimeDescription: string;
}

export const mockReviews: Review[] = [
  {
    rating: 5,
    text: {
      text: "YESIGN transformed our restaurant's brand identity completely! Their team created a stunning logo, menu design, and social media presence that truly captures the essence of Kerala cuisine. The attention to detail and understanding of our cultural values was exceptional. Highly recommend their services!",
    },
    authorAttribution: {
      displayName: 'Arun Krishnan',
      photoUri: '',
    },
    relativePublishTimeDescription: '2 weeks ago',
  },
  {
    rating: 5,
    text: {
      text: "Outstanding web design and SEO services! Our e-commerce website traffic increased by 300% within just 3 months. YESIGN's team is professional, creative, and truly understands digital marketing. They helped us reach customers across Kerala and beyond. Best investment for our business!",
    },
    authorAttribution: {
      displayName: 'Meera Nair',
      photoUri: '',
    },
    relativePublishTimeDescription: '1 month ago',
  },
  {
    rating: 5,
    text: {
      text: "Working with YESIGN was a fantastic experience! They designed our company's complete brand identity including business cards, letterheads, and packaging. Their creative approach and timely delivery exceeded our expectations. The team's dedication to quality is unmatched!",
    },
    authorAttribution: {
      displayName: 'Vineeth Menon',
      photoUri: '',
    },
    relativePublishTimeDescription: '3 weeks ago',
  },
  {
    rating: 5,
    text: {
      text: 'YESIGN created an amazing promotional video for our Ayurvedic wellness center. The production quality was cinema-grade, and they perfectly captured the serene atmosphere of our treatments. Our bookings have doubled since we started using their video content on social media!',
    },
    authorAttribution: {
      displayName: 'Lakshmi Pillai',
      photoUri: '',
    },
    relativePublishTimeDescription: '1 week ago',
  },
  {
    rating: 4,
    text: {
      text: "Great experience with YESIGN's social media marketing team! They managed our Instagram and Facebook pages professionally, creating engaging content that resonates with our audience. Our follower count grew significantly, and customer engagement is at an all-time high.",
    },
    authorAttribution: {
      displayName: 'Rajesh Varma',
      photoUri: '',
    },
    relativePublishTimeDescription: '2 months ago',
  },
  {
    rating: 5,
    text: {
      text: "YESIGN designed our jewelry brand's complete visual identity - from the elegant logo to the beautiful product photography. Their understanding of luxury aesthetics and attention to minute details made our brand stand out in the competitive market. Truly exceptional creative work!",
    },
    authorAttribution: {
      displayName: 'Priya Suresh',
      photoUri: '',
    },
    relativePublishTimeDescription: '1 month ago',
  },
  {
    rating: 5,
    text: {
      text: 'Our startup needed a modern, responsive website that could handle high traffic. YESIGN delivered beyond expectations! The UI/UX design is intuitive, the website loads blazingly fast, and their ongoing SEO support has helped us rank on the first page of Google for multiple keywords.',
    },
    authorAttribution: {
      displayName: 'Anand Kumar',
      photoUri: '',
    },
    relativePublishTimeDescription: '3 weeks ago',
  },
  {
    rating: 4,
    text: {
      text: 'YESIGN helped rebrand our traditional textile business for the digital age. Their creative team designed a stunning e-commerce platform and ran successful digital marketing campaigns. We now receive orders from all over India. Professional team with excellent communication!',
    },
    authorAttribution: {
      displayName: 'Deepa Mohan',
      photoUri: '',
    },
    relativePublishTimeDescription: '6 weeks ago',
  },
  {
    rating: 5,
    text: {
      text: 'The branding package YESIGN created for our café was absolutely stunning! From the rustic logo to the Instagram-worthy menu cards and wall murals, everything screams creativity. Our café has become a popular spot for food bloggers. Thank you, YESIGN, for making our dream come true!',
    },
    authorAttribution: {
      displayName: 'Santhosh Rajan',
      photoUri: '',
    },
    relativePublishTimeDescription: '2 weeks ago',
  },
  {
    rating: 5,
    text: {
      text: "YESIGN's video production team created an emotional documentary-style brand film for our NGO. The storytelling was powerful, and the cinematography was breathtaking. It helped us raise awareness and donations significantly. Their passion for meaningful projects truly shows in their work!",
    },
    authorAttribution: {
      displayName: 'Kavitha Joseph',
      photoUri: '',
    },
    relativePublishTimeDescription: '1 month ago',
  },
];

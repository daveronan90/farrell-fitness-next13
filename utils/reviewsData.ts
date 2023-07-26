export interface Review {
  publishTime: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: string;
  textLanguageCode: string;
  authorAttribution: {
    displayName: string;
    photoURI: string;
    uri: string;
  };
}

export const defaultReviews: Review[] = [
  {
    authorAttribution: {
      displayName: "Donal McGee",
      photoURI:
        "https://lh3.googleusercontent.com/a-/AD_cMMQ2I_mj9kK8FvI_WJVnIFTXTb_Hh0p1xL9jJcvUdmZTX7Y=s128-c0x00000000-cc-rp-mo",
      uri: "https://www.google.com/maps/contrib/113677558714472910550/reviews",
    },
    publishTime: "2023-03-12T23:38:54.000Z",
    relativePublishTimeDescription: "4 months ago",
    rating: 5,
    text: "I got a day pass to Farrell Fitness today and it was one of the best gym experiences I’ve ever had. Eoghan was very friendly and made me feel welcome from the moment I arrived. The gym itself has a fantastic range of equipment, the space is large and airy and the members had a great gym etiquette. Highly recommended.",
    textLanguageCode: "en",
  },
  {
    authorAttribution: {
      displayName: "Michael Doyle",
      photoURI:
        "https://lh3.googleusercontent.com/a/AAcHTte8Aisw4DWV6YYJZ2hnRbC9yyZfnLgMVNlIgjrkcdi5=s128-c0x00000000-cc-rp-mo",
      uri: "https://www.google.com/maps/contrib/104057722969265897292/reviews",
    },
    publishTime: "2023-05-13T07:35:35.000Z",
    relativePublishTimeDescription: "2 months ago",
    rating: 5,
    text: "As trainer of a local Gaa team we decided to use Farrell Fitness to assist us during pre-season.\nWe had large numbers so we needed somewhere that would be able to facilitate us and Farrell Fitness certainly ticked this box.\nEach night Robbie and the lads were extremely organised and had everything in the gym set up and ready to go. Despite our large numbers no individual was left feeling unsure of what they should be doing as all exercises were  clearly explained beforehand and if anyone was lifting using poor form/technique they were pulled aside and clearly shown how it should be done.\n\nThe music,trainers,players and well equipped gym combined to make it a very enjoyable experience for all involved.\n\nThanks for having us Robbie👍",
    textLanguageCode: "en",
  },
  {
    authorAttribution: {
      displayName: "Annemarie Ackerley",
      photoURI:
        "https://lh3.googleusercontent.com/a/AAcHTtcwaj3eZ9LM1GebfLeKxYTHAV67-owz1qVQTfe5Dw8s=s128-c0x00000000-cc-rp-mo",
      uri: "https://www.google.com/maps/contrib/108447500802797340728/reviews",
    },
    publishTime: "2023-07-01T14:32:44.000Z",
    relativePublishTimeDescription: "3 weeks ago",
    rating: 5,
    text: "My daughter has started teen gym and absolutely loves it. The instructor James is brilliant, interactive session with clear and concise instruction.",
    textLanguageCode: "en",
  },
  {
    authorAttribution: {
      displayName: "Deirdre Egan",
      photoURI:
        "https://lh3.googleusercontent.com/a/AAcHTtcWQO1o62xzuNnqAGfYj2c90z1feAQ9N_-r-JXfOjax=s128-c0x00000000-cc-rp-mo",
      uri: "https://www.google.com/maps/contrib/110583948691989351749/reviews",
    },
    publishTime: "2023-07-01T17:25:45.000Z",
    relativePublishTimeDescription: "3 weeks ago",
    rating: 5,
    text: "Both my teenagers attend the teen gym  with James and they love it. Would highly recommend the sessions",
    textLanguageCode: "en",
  },
  {
    authorAttribution: {
      displayName: "joshua tubritt",
      photoURI:
        "https://lh3.googleusercontent.com/a/AAcHTtdF8M5JQ-NE3CPsCZ4cYxYywxbJ2VYDMS5Iu2_rzuop=s128-c0x00000000-cc-rp-mo-ba4",
      uri: "https://www.google.com/maps/contrib/113448822837837238624/reviews",
    },
    publishTime: "2022-01-16T20:01:31.000Z",
    relativePublishTimeDescription: "a year ago",
    rating: 5,
    text: "Had the fortune to call in here randomly for a workout a few months ago. I was so impressed by the set up and service, afterwards I purchased the membership there and then. Since then my fitness goals have surpassed anything I expected.\nRobbie and the team have an absolute state of the art facility that’s constantly growing, a great environment for people of all abilities and friendly service and advice. It’s hands down easily the best gym I’ve ever been part of, at home or abroad. Would recommend to any experienced gym user or someone thinking of starting out, to give Farrell Fitness a try. It’s a real gem and a testament to Robbie’s hard work and dedication!\n10/10 would recommend to a friend.",
    textLanguageCode: "en",
  },
];

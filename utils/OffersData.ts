type Benefit = string;

interface Offer {
  title: string;
  subTitle: string;
  price: string;
  benefits: Benefit[];
}

export const offers: Offer[] = [
  {
    title: "Classes + Gym",
    subTitle: "1 Month",
    price: "90",
    benefits: ["Open Gym", "Expert-led sessions", "Engaging groups"],
  },
  {
    title: "Gym",
    subTitle: "1 year",
    price: "549",
    benefits: ["Flexible hours", "Diverse equipment", "Spacious environment"],
  },
  {
    title: "Gym + Program",
    subTitle: "3 Months",
    price: "345",
    benefits: ["Gym Access", "Personal coaching", "Tailored workouts"],
  },
];

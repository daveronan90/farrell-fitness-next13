interface Person {
  name: string;
  position: string;
  desc: string;
  url: string;
}

export const team: Person[] = [
  {
    name: "Robbie",
    position: "Owner",
    desc: "Robbie, the owner of Farrell Fitness, is a passionate fitness enthusiast dedicated to transforming lives through health.",
    url: "/images/robbie.webp",
  },
  {
    name: "Cat",
    position: "Manager",
    desc: "Cat, the dedicated manager at Farrell Fitness, has been with the gym since its inception, overseeing operations with expertise.",
    url: "/images/cat.webp",
  },
  {
    name: "Eoghan",
    position: "Personal Trainer",
    desc: "Eoghan, a skilled CrossFit and mobility specialist, brings three years of experience to his training expertise.",
    url: "/images/eoghan.webp",
  },
  {
    name: "Paul",
    position: "Personal Trainer",
    desc: "Paul, a seasoned personal trainer at Farrell Fitness, has 4 years of experience in guiding clients to their fitness goals.",
    url: "/images/paul.webp",
  },
  {
    name: "James",
    position: "Jr. Personal Trainer",
    desc: "James, a junior personal trainer fresh out of college, brings enthusiasm and a passion for helping clients achieve their fitness goals.",
    url: "/images/james.webp",
  },
];

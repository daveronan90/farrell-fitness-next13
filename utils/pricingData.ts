export interface service {
  desc: string;
  duration: string;
  price: string;
}

export interface ServiceGroup {
  category: string;
  services: service[];
}

export const defaultPriceList: ServiceGroup[] = [
  { category: "", services: [{ desc: "", duration: "", price: "" }] },
];

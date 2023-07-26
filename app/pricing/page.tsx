import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import PriceList from "@/components/PriceList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

export default async function Page() {
  return (
    <>
      <PageLayout
        title="Price List"
        summary="Explore our affordable price listing for a wide range of services and memberships at Farrell Fitness. From open gym access to personalized training programs, achieve your fitness goals without breaking the bank. Join us and start your fitness journey today!"
        videoPath="/videos/mainVideo.webm"
      >
        <PriceList />
        <Button text="sign up" />
      </PageLayout>
    </>
  );
}

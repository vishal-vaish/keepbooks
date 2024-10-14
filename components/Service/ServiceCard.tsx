import {HoverEffect} from "../ui/card-hover-effect";
import {AllServices} from "@/constant/data";
import {Button} from "@/components/ui/button";

const ServiceCard = () => {
  return (
    <div className="my-2">
      <HoverEffect items={AllServices} className="pt-5"/>
      <div className="w-full text-center mb-10">
        <Button
          variant="secondary"
          className="text-center"
        >
          View All Services
        </Button>
      </div>
    </div>
  );
}

export default ServiceCard;
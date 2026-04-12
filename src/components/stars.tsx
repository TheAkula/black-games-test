import StarSVG from "@/icons/star";

export const Stars = ({ rating }: StarsProps) => {
  const starActive = (starIndex: number) => starIndex < rating;
  return <div className="flex flex-row justify-center gap-[11px]">
    {[...Array(3).keys()].map((starIndex) => (
      <div key={starIndex}>
        <StarSVG className={`${starActive(starIndex) ? 'text-primary' : 'fill-text opacity-30'}`} />
      </div>
    ))}
  </div>;
};

type ZeroToThree = 0 | 1 | 2 | 3;

interface StarsProps {
  rating: ZeroToThree;
}

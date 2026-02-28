
import PersonCard, { IPerson } from "@/components/PersonCard/PersonCard";

interface IPersonGridProps {
  results: IPerson[];
}

const PersonGrid = ({ results }: IPersonGridProps) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="grid gap-x-10 gap-y-8 select-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((person) => {
        return <PersonCard key={person.id} person={person} />;
      })}
    </div>
  );
};

export default PersonGrid;

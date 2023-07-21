import type { Category } from "~/components/dubois/types";

interface Props {
  categories: Category[];
}

export default function Legend({ categories }: Props) {
  return (
    <div className="font-duboisNarrow uppercase">
      <div className="grid grid-cols-3 mx-6 md:mx-auto md:flex md:flex-col md:mt-8">
        {categories.map((category) => (
          <div key={category.color} className="md:flex md:flex-row md:items-center md:pl-4">
            <div
              className="md:mr-2 rounded-2xl h-8 w-8"
              style={{
                backgroundColor: category.color,
                border: "1px solid black",
              }}
            />
            <p className="md:text-xl md:ml-1">{category.displayName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

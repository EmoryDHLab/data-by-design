import { Category } from "~/components/dubois/types";

interface Props {
  categories: Category[];
}

export default function Legend({ categories }: Props) {
  return (
    <div className="font-duboisNarrow uppercase">
      <div className="flex flex-col">
        {categories.map((category) => (
          <div className="flex flex-row mb-6 items-center pl-4">
            <div
              className="mr-2 rounded-2xl h-8 w-8"
              style={{
                backgroundColor: category.color,
                border: "1px solid black",
              }}
            />
            <p>{category.displayName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

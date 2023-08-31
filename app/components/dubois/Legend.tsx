import type { Category } from "~/components/dubois/types";
import { useDeviceContext } from "~/hooks";

interface Props {
  categories: Category[];
  reverse?: boolean;
  className?: string;
}

export default function Legend({ categories, reverse, className }: Props) {
  const { isDesktop } = useDeviceContext();

  return (
    <div className="font-duboisNarrow uppercase">
      <div className="grid grid-cols-3 mx-6 md:mx-auto md:flex md:flex-col md:mt-8">
        {categories.map((category) => (
          <div key={category.color} className="md:flex md:flex-row md:items-center md:pl-4">
            <div
              className={`md:mr-2 rounded-2xl h-8 w-8 min-w-[2rem] ${reverse && isDesktop ? "order-last" : ""}`}
              style={{
                backgroundColor: category.color,
                border: "1px solid black",
              }}
            />
            <p className={`md:text-lg ${reverse && isDesktop ? "flex-1 text-right mr-2" : "md:ml-1"}`}>{category.displayName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

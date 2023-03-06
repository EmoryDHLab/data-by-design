import Figure from "~/components/layout/Figure";

export default function PhotographChart() {
  return (
    <div className="py-16 bg-black w-full flex flex-col items-center pb-10">
      <div className="max-w-5xl flex">
        <Figure
          className="grid grid-cols-2 items-center middle-full gap-x-4"
          images={[
            {
              src: "/images/ch4-19-rachel-carey-george.webp",
              alt: "",
            },
            {
              src: "/images/ch4-20-gbq-q030-06.webp",
              alt: "",
            },
          ]}
        >
          <figcaption className="text-white">
            <p>
              <strong>Left:</strong> "Housetop," by Rachel Carey George, ca.
              1935.
            </p>
            <p>
              <strong>Right:</strong> "Housetop" variation, design by Mary Lee
              Bendolph. 1998, quilted by Essie Bendolph Pettaway, 2001. Photos
              courtesy of Tinwood Media.
            </p>
            <p>
              <em>Permissions pending.</em>
            </p>
          </figcaption>
        </Figure>
      </div>
    </div>
  );
}

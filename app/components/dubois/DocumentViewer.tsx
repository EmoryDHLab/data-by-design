import { useState } from "react";
import { classNames } from "~/utils";

const imageSets = [
  {
    images: [
      {
        src: "/images/dubois/863.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33863.",
        text: "The Georgia Negro: A Social Study",
      },
      {
        src: "/images/dubois/864.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33864.",
        text: `Relative Negro population of the states of the United States.`,
        date: "1900",
      },
      {
        src: "/images/dubois/865.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33865.",
        text: "The states of the United States according to their Negro population.",
      },
      {
        src: "/images/dubois/866.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33866.",
        text: "Negro population of Georgia.",
      },
      {
        src: "/images/dubois/867.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33867.",
        text: "Negro population of Georgia by counties. 1890.",
      },
      {
        src: "/images/dubois/868.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33868.",
        text: "Negro population of Georgia by counties.",
      },
      {
        src: "/images/dubois/869.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33869.",
        text: "Comparative increase of white and colored population of Georgia.",
      },
      {
        src: "/images/dubois/870.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33870.",
        text: "Migration of Negroes. 1890.",
      },
      {
        src: "/images/dubois/871.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33871.",
        text: "Age distribution of Georgia Negroes compared with France.",
      },
      {
        src: "/images/dubois/872.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33872.",
        text: "Conjugal condition.",
      },
      {
        src: "/images/dubois/873.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33873.",
        text: "City and Rural Population. 1890.",
      },
      {
        src: "/images/dubois/874.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33874.",
        text: "Slaves and free Negroes.",
      },
      {
        src: "/images/dubois/875.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33875.",
        text: "Race amalgamation in Georgia based on a study of 40,000 individuals of Negro descent.",
      },
      {
        src: "/images/dubois/876.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33876.",
        text: "Illiteracy.",
      },
      {
        src: "/images/dubois/877.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33877.",
        text: "Negro children enrolled in the public schools.",
      },
      {
        src: "/images/dubois/878.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33878.",
        text: "Negro teachers in Georgia public schools.",
      },
      {
        src: "/images/dubois/879.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33879.",
        text: "Number of Negro students taking the various courses of study offered in Georgia schools.",
      },
      {
        src: "/images/dubois/880.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33880.",
        text: "Value of land owned by Georgia Negroes.",
      },
      {
        src: "/images/dubois/881.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33881.",
        text: "Acres of land owned by Negroes in Georgia.",
      },
      {
        src: "/images/dubois/882.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33882.",
        text: "Land owned by Negroes in Georgia, U.S.A. 1870-1900.",
      },
      {
        src: "/images/dubois/883.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33883.",
        text: "Valuation of town and city property owned by Georgia Negroes.",
      },
      {
        src: "/images/dubois/884.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33884.",
        text: "Assessed Valuation of All Taxable Property Owned by Georgia Negroes.",
      },
      {
        src: "/images/dubois/885.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33885.",
        text: "Negro property in two cities of Georgia.",
      },
      {
        src: "/images/dubois/886.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33886.",
        text: "Value of farming tools.",
      },
      {
        src: "/images/dubois/887.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33887.",
        text: "Assessed Value of Household and Kitchen Furniture Owned by Georgia Negroes.",
      },
      {
        src: "/images/dubois/888.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33888.",
        text: "Occupations of Georgia Negroes. Males over 10.",
      },
      {
        src: "/images/dubois/889.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33889.",
        text: "Occupations of Negroes and whites in Georgia.",
      },
      {
        src: "/images/dubois/890.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33890.",
        text: "Occupations.",
      },
      {
        src: "/images/dubois/891.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33891.",
        text: "Occupations and income.",
      },
      {
        src: "/images/dubois/892.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33892.",
        text: "Condition of 300 Negro farm tenants after 1 year's toil, 1898.",
      },
      {
        src: "/images/dubois/893.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33893.",
        text: "Income and expenditure of 150 Negro families in Atlanta, Ga., U.S.A.",
      },
      {
        src: "/images/dubois/894.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33894.",
        text: "Family budgets.",
      },
      {
        src: "/images/dubois/895.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33895.",
        text: "Family budgets.",
      },
      {
        src: "/images/dubois/896.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33896.",
        text: "Albany, Dougherty County, Ga. Distribution of 2,500 Negro inhabitants.",
      },
      {
        src: "/images/dubois/897.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33897.",
        text: "McIntosh County, Georgia.",
      },
      {
        src: "/images/dubois/898.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33898.",
        text: "Darien, McIntosh Co., GA",
      },
    ],
  },
  {
    images: [
      {
        src: "/images/dubois/899.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33899.",
        text: "A series of statistical charts illustrating the condition of the descendants of former African slaves now in residence in the United States of America",
      },
      {
        src: "/images/dubois/900.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33900.",
        text: "Distribution of Negroes in the United States.",
      },
      {
        src: "/images/dubois/901.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33901.",
        text: "Increase of the Negro population in the United States of America",
      },
      {
        src: "/images/dubois/902.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33902.",
        text: "Comparative rate of increase of the white and Negro elements of the population of the United States",
      },
      {
        src: "/images/dubois/903.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33903.",
        text: "Negro Population in the United States Compared with the Total Popuation of Other Countries.",
      },
      {
        src: "/images/dubois/904.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33904.",
        text: "Proportion of Negroes in the total population of the United States",
      },
      {
        src: "/images/dubois/905.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33905.",
        text: "Occupations in which American Negroes are engaged",
      },
      {
        src: "/images/dubois/906.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33906.",
        text: "Proportion of Whites and Negroes in the different classes of occupation in the United States",
      },
      {
        src: "/images/dubois/907.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33907.",
        text: "Occupations in which 10,000 or more American Negroes are engaged",
      },
      {
        src: "/images/dubois/908.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33908.",
        text: "Number of Negro teachers in the public schools of the United States",
      },
      {
        src: "/images/dubois/909.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33909.",
        text: "Illiteracy of the American Negroes compared with that of other nations.",
      },
      {
        src: "/images/dubois/910.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33910.",
        text: "Enrollment in the Negro common schools of the former slave states of the United States.",
      },
      {
        src: "/images/dubois/911.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33911.",
        text: "Proportion of total Negro children of school age who are enrolled in the public schools.",
      },
      {
        src: "/images/dubois/912.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33912.",
        text: "The Rise of the Negroes from Slavery to Freedom in One Generation",
      },
      {
        src: "/images/dubois/913.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33913.",
        text: "Proportion of freemen and slaves among American Negroes.",
      },
      {
        src: "/images/dubois/914.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33914.",
        text: "City and rural population among American Negroes in the former slave states.",
      },
      {
        src: "/images/dubois/915.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33915.",
        text: "Conjugal condition of American Negroes according to age periods.",
      },
      {
        src: "/images/dubois/916.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33916.",
        text: "The Amalgamation of the White and Black elements of the population in the United States.",
      },
      {
        src: "/images/dubois/917.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33917.",
        text: "Assessed value of property owned by Negroes in three states of the United States.",
      },
      {
        src: "/images/dubois/918.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33918.",
        text: "Negro landholders in various states of the United States.",
      },
      {
        src: "/images/dubois/919.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33919.",
        text: "Negro business men in the United States.",
      },
      {
        src: "/images/dubois/920.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33920.",
        text: "Pauperism among American Negroes.",
      },
      {
        src: "/images/dubois/921.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33921.",
        text: "Mortality of American Negroes.",
      },
      {
        src: "/images/dubois/922.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33922.",
        text: "Crime among American Negroes.",
      },
      {
        src: "/images/dubois/923.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33923.",
        text: "American Negro newspapers and periodicals.",
      },
      {
        src: "/images/dubois/924.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33924.",
        text: "Religion of American Negroes.",
      },
      {
        src: "/images/dubois/925.jpeg",
        credit1: "Image courtesy of the Library of Congress,",
        credit2: "Prints & Photographs Division,",
        credit3: "LC-DIG-ppmsca-33925.",
        text: "Statistics of Negro church organizations.",
      },
    ],
  },
];

export default function DocumentViewer() {
  const [selectedSet, setSelectedSet] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImage = imageSets[selectedSet].images[selectedImageIndex];

  return (
    <div className="bg-black w-full flex">
      <div className="py-10 px-5 flex flex-col items-center w-1/5 space-y-5">
        <button
          onClick={() => {
            setSelectedSet(0);
          }}
        >
          {selectedSet === 0 ? (
            <div className="space-y-5 max-w-[100px]">
              <img src="/images/dubois/stack1.png" />
              <img className="w-full" src="/images/dubois/set1.png" />
            </div>
          ) : (
            <div className="space-y-5 max-w-[100px]">
              <img src="/images/dubois/eyeframe.png" />
              <img className="w-full" src="/images/dubois/set1.png" />
            </div>
          )}
        </button>
        <button onClick={() => setSelectedSet(1)}>
          {selectedSet === 1 ? (
            <div className="space-y-5 max-w-[100px]">
              <img src="/images/dubois/stack2.png" />
              <img className="w-full" src="/images/dubois/set2.png" />
            </div>
          ) : (
            <div className="space-y-5 max-w-[100px]">
              <img src="/images/dubois/eyeframe.png" />
              <img className="w-full" src="/images/dubois/set2.png" />
            </div>
          )}
        </button>
      </div>
      <div>
        <div className="grid grid-cols-4 md:grid-cols-9 gap-8 py-5 px-20">
          {imageSets[selectedSet].images.map(({ src }, index) => (
            <img
              src={src}
              onClick={() => {
                setSelectedImageIndex(index);
              }}
              className={classNames(
                index === selectedImageIndex &&
                  "p-1 hover:border-white-700 border-solid border-white border-2 rounded-md",
                "max-w-[80px]"
              )}
            />
          ))}
        </div>
        <div className="slides flex flex-nowrap py-5 px-40 content-center relative">
          <div className="flex flex-col items-center">
            <div className="flex">
              <img src={selectedImage.src} />
            </div>
            <div className="flex text-white">
              <button
                onClick={() => {
                  setSelectedImageIndex(
                    (i) => (i + 1) % imageSets[selectedSet].images.length
                  );
                }}
              >
                <img
                  className="w-[27.5px] h-[19.5px] mt-5"
                  src="/images/dubois/leftarrow.png"
                />
              </button>
              <div>
                <p className="my-2 text-white-600 font-normal text-lg mt-5">
                  {selectedImage?.text}
                </p>
                <p className="text-white-600 font-thin text-sm text-center">
                  {selectedImage?.credit1}
                </p>
                <p className="text-white-600 font-thin text-sm text-center">
                  {selectedImage?.credit2}
                </p>
                <p className="text-white-600 font-thin text-sm">
                  {selectedImage?.credit3}
                </p>
              </div>
              <button>
                <img
                  className="w-[27.5px] h-[19.5px] mt-5"
                  src="/images/dubois/rightarrow.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

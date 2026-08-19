import { HOST_NAME, SITE_DESCRIPTION } from "~/utils";

export const bookMeta = {
  title: "Data by Design",
  subtitle: "Visualization and Power from Abolition to the Dawn of Data Science",
  author: "Lauren Klein",
  publisher: "MIT Press",
  // The book is not out yet, so only the year is asserted. Add the full
  // YYYY-MM-DD once the on-sale date is confirmed with MIT Press.
  publicationYear: "2026",
  // Taken from the retailer URLs below.
  isbn: "9780262056182",
  cover: "/images/bookcover.webp",
};

export type Retailer = {
  name: string;
  url: string;
};

export const retailers: Retailer[] = [
  {
    name: "MIT Press",
    url: "https://mitpress.mit.edu/9780262056182/data-by-design/",
  },
  {
    name: "Bookshop.org",
    url: "https://bookshop.org/p/books/data-by-design-visualization-and-powerfrom-abolition-to-the-dawn-of-data-science-lauren-f-klein/60e85f080f3ef3b9?ean=9780262056182&next=t&next=t&affiliate=2238",
  },
  {
    name: "Barnes & Noble",
    url: "https://www.barnesandnoble.com/s/9780262056182/",
  },
];

// schema.org Book, for search engines and rich results. Deliberately omits
// price, page count, and format: those are not confirmed anywhere in this
// repo, and structured data that contradicts the retailer page is worse than
// structured data that is merely sparse.
export const bookSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: `${bookMeta.title}: ${bookMeta.subtitle}`,
  description: SITE_DESCRIPTION,
  author: {
    "@type": "Person",
    name: bookMeta.author,
  },
  publisher: {
    "@type": "Organization",
    name: bookMeta.publisher,
  },
  isbn: bookMeta.isbn,
  datePublished: bookMeta.publicationYear,
  inLanguage: "en",
  url: HOST_NAME,
  image: `${HOST_NAME}${bookMeta.cover}`,
  offers: retailers.map((retailer) => ({
    "@type": "Offer",
    url: retailer.url,
    availability: "https://schema.org/PreOrder",
    seller: {
      "@type": "Organization",
      name: retailer.name,
    },
  })),
});

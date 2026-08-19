import { HOST_NAME, SITE_DESCRIPTION } from "~/utils";

export const bookMeta = {
  title: "Data by Design",
  subtitle: "Visualization and Power from Abolition to the Dawn of Data Science",
  author: "Lauren Klein",
  publisher: "The MIT Press",
  publicationDate: "2026-10-20",
  // Kept as a literal so the displayed date can't be shifted by a timezone.
  publicationDateDisplay: "October 20, 2026",
  isbn: "9780262056182",
  format: "Hardcover",
  pages: 304,
  illustrations: "225 color illus.",
  dimensions: "8 × 9 in",
  cover: "/images/bookcover.webp",
};

// Catalog details, as two short lines of small type under the CTAs. The on-sale
// date is deliberately absent: it already sits beside the "Preorder Now" label.
export const bookFacts = [
  [bookMeta.publisher, bookMeta.format],
  [
    `${bookMeta.pages} pp.`,
    bookMeta.illustrations,
    bookMeta.dimensions,
    `ISBN ${bookMeta.isbn}`,
  ],
];

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

// schema.org Book, for search engines and rich results.
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
  bookFormat: "https://schema.org/Hardcover",
  numberOfPages: bookMeta.pages,
  datePublished: bookMeta.publicationDate,
  inLanguage: "en",
  url: HOST_NAME,
  image: `${HOST_NAME}${bookMeta.cover}`,
  offers: retailers.map((retailer) => ({
    "@type": "Offer",
    url: retailer.url,
    availability: "https://schema.org/PreOrder",
    availabilityStarts: bookMeta.publicationDate,
    seller: {
      "@type": "Organization",
      name: retailer.name,
    },
  })),
});

export default function USAMap() {
  return (
    <section className="w-full md:w-8/12 mb-6 md:px-6">
      <figure>
        <picture>
          <source srcSet={`/images/dubois/map.webp`} />
          <source srcSet={`/images/dubois/map.jpg`} />
          <img
            className={`drop-shadow-lg`}
            src={`/images/dubois/map.jpg`}
            alt=""
            title=""
            draggable=""
          />
        </picture>
      </figure>
      <p className="flex items-center justify-center font-dubois uppercase mt-0">
        <svg width="203" height="23" viewBox="0 0 208 28" fill="none">
          <path
            d="M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z"
            fill="black"
          />
          <text x={32} y={22} fill="black" fontSize={20}>Atlanta University</text>
        </svg>
      </p>
    </section>
  );
}

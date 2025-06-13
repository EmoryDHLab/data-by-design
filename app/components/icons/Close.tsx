const CloseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 300 300"
      fill="white"
      className={className}
    >
      <g>
        <g>
          <rect
            x={72.34}
            y={137.06}
            width={155.32}
            height={25.89}
            transform="translate(-62.13 150) rotate(-45)"
          />
          <rect
            x={72.34}
            y={137.06}
            width={155.32}
            height={25.89}
            transform="translate(150 -62.13) rotate(45)"
          />
        </g>
      </g>
    </svg>
  );
};

export default CloseIcon;

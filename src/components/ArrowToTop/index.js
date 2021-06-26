function ArrowToTop(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width="2em"
      height="2em"
      style={{
        msTransform: "rotate(360deg)",
        WebkitTransform: "rotate(360deg)",
      }}
      viewBox="0 0 24 24"
      transform="rotate(360)"
      {...props}
    >
      <path
        d="M18 15l-6-6-6 6"
        fill="none"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowToTop;

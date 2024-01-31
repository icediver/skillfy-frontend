import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="flex gap-1.5 items-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="14" cy="14" r="14" fill="#F56962" />
          <path
            transform="translate(5,6)"
            d="M8.69431 0C10.8489 0 12.9153 0.855919 14.4388 2.37946C15.9624 3.90301 16.8183 5.96938 16.8183 8.124C16.8183 10.291 21.0003 15.277 21.0003 15.277C21.0003 15.277 11.0143 16.248 8.69431 16.248C6.53969 16.248 4.47332 15.3921 2.94978 13.8685C1.42623 12.345 0.570313 10.2786 0.570312 8.124C0.570313 5.96938 1.42623 3.90301 2.94978 2.37946C4.47332 0.855919 6.53969 0 8.69431 0V0Z"
            fill="white"
          />
        </g>
      </svg>
      <span className="text-1.75xl font-medium">Skillfy</span>
    </Link>
  );
}

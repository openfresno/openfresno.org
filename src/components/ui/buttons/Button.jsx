import Link from "next/link";

const Button = ({ className, href, target, onClick, textContent }) => {
  return href ? (
    <Link className={className} href={href} target={target ? target : "_self"}>
      {textContent}
    </Link>
  ) : (
    <button className={className} onClick={onClick ? onClick : null}>
      {textContent}
    </button>
  );
};

export default Button;

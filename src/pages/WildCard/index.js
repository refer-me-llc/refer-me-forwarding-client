import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function WildCard() {
  const location = useLocation();

  useEffect(() => {
    const pathNameAndSearch = location.pathname + location.search;
    window.location.href = `https://www.refer.me${pathNameAndSearch}`;
  }, [])

  return <div />
}

export default WildCard;
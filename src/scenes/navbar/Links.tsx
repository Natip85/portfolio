import './links.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

const Links = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <>
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "active" : "not-active"}`}
    id='links'
      href={`#${lowerCasePage}`}
      onClick={()=>setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
    </>
  )
}

export default Links
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCoffee,
  faAlignRight,
  faChevronDown,
  faTimes,
  faSearch,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

export default function getFontAwesomeIcons() {
  library.add(
    fab,
    faCoffee,
    faAlignRight,
    faChevronDown,
    faTimes,
    faSearch,
    faHeart,
    faComment
  )
}

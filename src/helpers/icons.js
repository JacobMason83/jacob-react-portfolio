import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon, FortAwesomIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faSignOutAlt, faEdit, faEraser, faSpinner, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Icons = () => {

 return library.add(faTrash, faSignOutAlt, faEdit, faEraser, faSpinner, faPlusCircle)
}


export default Icons;
import './StyledButton.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const StyledAddButton = ({title, hoverColor}) => {
    return (<button  className={'btn border-2 text-white hover:bg-' + hoverColor}>{title}</button>)
}

export const StyledIncreaseQunatity = ({title, hoverColor}) => {
    return (<AddIcon className="cursor-pointer addOrRemoveIcon text-white" />)
}

export const StyledDecreaseQunatity = ({title, hoverColor}) => {
    return (<RemoveIcon className="cursor-pointer addOrRemoveIcon text-white" />)
}

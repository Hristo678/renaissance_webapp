import './StyledButton.css'

const StyledButton = ({title, hoverColor}) => {
    return (<button  className={`btn border-2 hover:` + hoverColor}>{title}</button>)
}

export default StyledButton
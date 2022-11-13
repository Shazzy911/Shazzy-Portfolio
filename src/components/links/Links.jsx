import "./Links.scss"


const Links = (props) => {
    const {tag, text , setMenuOpen} = props;

    const changeHandler =  ()=>{
        setMenuOpen(false)
    }


  return (
    <div>
        <li onClick={changeHandler}>
            <a href={tag}>{text}</a>
         </li>
    </div>
  )
}

export default Links;
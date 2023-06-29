
const Link = ({copy,link,className}) =>(
    <>
        <a href={link} className={`button ${className}`}>{copy}</a>
    </>
)

Link.defaultProps={
    copy: "Descargar Arriba",
    link: "#",
    className: ""
}
export default Link;
import './style.css'
const NameChange = ({
    name,
    setName,

}: {
    name: Number;
    setName: any;
}) => {
    return (
        <>
            <div className="outer">
                <div className="inner">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </>
    )


}
export default NameChange
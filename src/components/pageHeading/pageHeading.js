import "./pageHeading.css";

function PageHeading (props) {
    return <h1 className="pageHeading">{ props.children }</h1>
}


export default PageHeading;
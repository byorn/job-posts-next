"use client";
const Navbar = () => {
    console.log("Gets Rendered on the Server In App directory if use client is not speacified on the top." +
        " But in Pages folder it get rendered on the client as Intended.");
    return ( <>
    <h2>Nav Bar</h2>
    </>)
}
export default Navbar;
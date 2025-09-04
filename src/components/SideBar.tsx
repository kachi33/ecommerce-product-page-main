import closeIcon from "../../public/icon-close.svg";

interface SideBarProps {
  // Define any props if needed
    setIsSideBarOpen: (open: boolean) => void;
    }

const SideBar = ({setIsSideBarOpen} : SideBarProps ) => {

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }

    return ( <>

    <section className=" relative">
        <div className='fixed inset-0 bg-black/70 ' onClick={closeSideBar}></div>
        <div className=" bg-white w-[70%] h-full z-50 fixed top-0 left-0 shadow-lg ">
            <img src={closeIcon} alt="Close Icon" className="h-6 w-6 m-6 cursor-pointer" onClick={closeSideBar} />
            <ul className="flex flex-col gap-8 p-6">
                <li className="font-bold text-lg">Collections</li>
                <li className="font-bold text-lg">Men</li>
                <li className="font-bold text-lg">Women</li>
                <li className="font-bold text-lg">About</li>
                <li className="font-bold text-lg">Contact</li>
            </ul>
        </div>
    </section>
    </> );
}
 
export default SideBar;
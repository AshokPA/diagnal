import { useState } from "react";
import BackIcon from "./icons/backIcon";
import CloseIcon from "./icons/closeIcon";
import SearchIcon from "./icons/searchIcon";

interface HeaderProps {
    pageTitle: string,
    searchText: string,
    doSearch: (text: string) => void,
};
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {pageTitle, searchText, doSearch} = props;
    const [toggleSearch, setToggleSearch] = useState(false);
    

    const handleSearch = () => {
        setToggleSearch(!toggleSearch);
        if(toggleSearch) {
            doSearch('');
        }
    }
    const handleSearchText = (text: string) => {
        doSearch(text)
    }
    return (
            <div className="flex content-center justify-between	items-center bg-yt-nav h-12 md:h-16 p-3 shadow-none">
                <div >
                    <BackIcon />
                </div>
                {toggleSearch ? (
                    <div className="w-full px-3">
                        <input type="text" 
                        className="w-full text-gray-800 px-2 border-r-2 focus-visible:outline-none"
                        placeholder="Search" 
                        onChange={(event) =>handleSearchText(event.target.value)} 
                        value={searchText}/>
                    </div>
                ) : (
                    <div className="text-lg" >
                        {pageTitle}
                    </div>
                )}
                
                <div onClick={handleSearch}>
                {!toggleSearch ?
                    <SearchIcon /> :
                    <CloseIcon/>
                    }
                </div>
            </div>        
    )
}
export default Header;

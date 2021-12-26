import { useState } from "react";

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
    }
    const handleSearchText = (text: string) => {
        doSearch(text)
    }
    return (
        <div className="bg-yt-nav h-16 block shadow-none">
            <div className="flex">
                <div >
                    icon
                </div>
                {toggleSearch ? (
                    <div>
                        <input type="text" 
                        placeholder="Search" 
                        onChange={(event) =>handleSearchText(event.target.value)} 
                        value={searchText}/>
                    </div>
                ) : (
                    <div >
                        {pageTitle}
                    </div>
                )}
                
                <div onClick={handleSearch}>
                    03
                </div>
            </div>
            
        </div>
        
    )
}
export default Header;

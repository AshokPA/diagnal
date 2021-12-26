import { useEffect, useRef } from "react";
import ContentList from "../components/contentList";
import Header from "../components/header";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Layout: React.FC = () => {
    const { getContents, searchContent } = useActions();
    const loadingRef = useRef<any>()
    const {searchText, filterdContents, loading, pageTitle} = useTypedSelector(
        (state) => state.contents
    )

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "10px",
            threshold: 0
            };
            const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    handleIntersectionObserver();
                }
            },
            options
            );
            if (loadingRef.current) {
            observer.observe(loadingRef.current);
            }
            return(() => {
            observer.disconnect()
            })
    }, [loadingRef]);

    const handleIntersectionObserver = () => {
        getContents();
    }
    const handleSearch = (text: string) => {
        searchContent(text);
    }
    const loadingCSS = {
        height: "20px",
    };
    const loadingText = {display: loading? 'block' : 'none'}
    return (
        <div className="max-h-screen overflow-hidden">
            <Header pageTitle={pageTitle} searchText={searchText} doSearch={handleSearch}/>
            <div className="container max-h-[90vh] overflow-y-auto overflow-x-hidden no-scrollbar" >
                <ContentList contents={filterdContents}/>
            <div ref={loadingRef} style={loadingCSS}>
                <span style={loadingText}>Loading....</span>
            </div>
            </div>           
        </div>
       
    )
}
export default Layout;
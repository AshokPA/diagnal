import ContentCard from "./contentCard";
interface Content {
    name: string,
    posterImage: string
}
interface  ContentProps{
    contents: Content []
}
const ContentList: React.FC<ContentProps> = (props: ContentProps) => {
    const {contents} = props;
    return(
        <div>
            <div className="grid grid-cols-3 gap-2 px-2 md:grid-cols-6">
                {contents.map((content: Content, id: number) => {
                    return (
                        <ContentCard content={content} key={content.name + '' + id}/>
                    )
                })}
            </div>
             {contents.length === 0 ? <div className="text-center text-gray-300 align-middle">No Item to display</div>: null}
        </div>
        
    )
}
export default ContentList
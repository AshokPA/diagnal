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
        <div className="flex flex-wrap justify-center">
            {contents.map((content: Content, id: number) => {
                return (
                    <ContentCard content={content} key={content.name + '' + id}/>
                )
            })}
             
        </div>
    )
}
export default ContentList
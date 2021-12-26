interface ContentCardProps {
    content: ContentProps
   
}
interface ContentProps {
    name: string;
    posterImage: string
}
const ContentCard: React.FC<ContentCardProps> = (props: ContentCardProps) => {
    const {content} = props;
    return (
        <div className="p-1 w-24 sm:w-32 md:w-48 lg:w-48 xl:w-64 2xl:w-64">
            <img className="" src={"assets/" + content.posterImage} alt={content.name} />
            <div className="">
                <div className="font-Titillium text-xs mb-2" style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>{content.name}</div>
            </div>
        </div>
    )
}
export default ContentCard;
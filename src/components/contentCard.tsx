interface ContentCardProps {
    content: ContentProps
   
}
interface ContentProps {
    name: string;
    posterImage: string
}
const ContentCard: React.FC<ContentCardProps> = (props: ContentCardProps) => {
    const {content} = props;
    
    const onError = (e:any) => {
        e.target.src = "assets/placeholder_for_missing_posters.png"
    }
    return (
        <div className="p-1 pb-6">
            <img className="w-full" src={"assets/" + content.posterImage} alt={content.name}  loading="lazy" onError={onError}/>
            <div className="pt-2">
                <div className="text-xs truncate" >{content.name}</div>
            </div>
        </div>
    )
}
export default ContentCard;
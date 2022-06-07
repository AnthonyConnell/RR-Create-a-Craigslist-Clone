import Posting from './posting'

const Gallery = (props) => {
    return (
        <div className="gallery">
            {props.postings.map((a, b) => {
                return <Posting posting={a} key={b} />
            })}
        </div>
    )
}

export default Gallery
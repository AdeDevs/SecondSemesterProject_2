export default function Message({ id, text, onDelete, likes, onLike, onDislike }) {


  const handleLike = () => {
     onLike(id)
  }

  const handleDislike = () => {
      onDislike(id)
  }

  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>&#10084;</button>
      <button onClick={handleDislike}>&#128148;</button>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  )
}
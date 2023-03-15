export default function UserInput({ content, setContent }) {
  return (
    <div>
      <textarea
        className='h-full w-full resize-none'
        placeholder='Start typing...'
        value={content}
        onChange={e => setContent(e.target.value)}
      />
    </div>
  )
}

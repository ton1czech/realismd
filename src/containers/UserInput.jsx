export default function UserInput({ content, setContent }) {
  return (
    <div>
      <textarea
        class='resize-none w-full h-full'
        placeholder='Start typing...'
        value={content}
        onInput={e => setContent(e.target.value)}
      />
    </div>
  )
}

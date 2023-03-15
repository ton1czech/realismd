export default function UserInput({ content, setContent }) {
  return (
    <>
      <textarea
        className='h-full w-full resize-none outline-0'
        placeholder='Start typing...'
        rows={35}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
    </>
  )
}

import './assessment1.css'

// eslint-disable-next-line react/prop-types
export const Assessment1 = ({label, clickHandler}) => {
  return (
    <button onClick={() => clickHandler()} className="assessment-1-btn">{label}</button>
  )
}

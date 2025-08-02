import css from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={css.wrapper}>
            <label className={css.label}>Find contacts by name</label>
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Search..."
            />
        </div>
    )
}

export default SearchBox

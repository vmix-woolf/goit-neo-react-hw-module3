import css from './Contact.module.css'

const Contact = ({ name, number }) => {
    return (
        <div className={css.card}>
            <div className={css.info}>
                <p className={css.name}>👤 {name}</p>
                <p className={css.number}>📞 {number}</p>
            </div>
            <button type="button" className={css.button}>
                Delete
            </button>
        </div>
    )
}

export default Contact

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import css from './ContactForm.module.css'

const ContactForm = ({ onAdd }) => {
    const initialValues = {
        name: '',
        number: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be at most 50 characters')
            .required('Required'),
        number: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be at most 50 characters')
            .required('Required'),
    })

    const handleSubmit = (values, actions) => {
        onAdd(values)
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className={css.form}>
                <label className={css.label}>Name</label>
                <Field name="name" className={css.input} />
                <ErrorMessage name="name" component="p" className={css.error} />

                <label className={css.label}>Number</label>
                <Field name="number" className={css.input} />
                <ErrorMessage name="number" component="p" className={css.error} />

                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </Form>
        </Formik>
    )
}

export default ContactForm

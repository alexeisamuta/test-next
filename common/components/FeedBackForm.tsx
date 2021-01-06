import React from "react"
import {useForm} from "react-hook-form"
import styles from "../styles/FeedBackForm.module.css"

type Inputs = {
    email: string,
    text: string,
    phone: number,
    textarea: string,
};

export default function FeedBackForm() {

    const {register, handleSubmit, errors} = useForm<Inputs>()
    const onSubmit = data => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.fullForm}>
            <label>Email</label>
            <input name="email"
                   placeholder="Email"
                   ref={register({
                       required: true,
                       pattern: /^[A-Za-z]+$/i
                   })}
            />
            {errors.email?.type === "required" && (<p>This field is required</p>)}
            {errors.email?.type === "pattern" && (<p>Alphabetical characters only</p>)}
            <label>Text</label>
            <input name="text"
                   placeholder="Text"
                   ref={register({
                       required: true,
                       pattern: /^[A-Za-z]+$/i
                   })
                   }/>
            {errors.text?.type === "required" && (<p>This field is required</p>)}
            {errors.text?.type === "pattern" && (<p>Alphabetical characters only</p>)}
            <label>Phone</label>
            <input name="phone"
                   type="number"
                   placeholder="Phone"
                   ref={register({
                       required: true,
                       minLength: 5,
                       maxLength: 7
                   })}/>
            {errors.phone?.type === "required" && (<p>This field is required</p>)}
            {errors.phone?.type === "maxLength" && (<p>Phone number cannot be more than 7 digits</p>)}
            {errors.phone?.type === "minLength" && (<p>Phone number cannot be less than 5 digits</p>)}
            <label>Textarea</label>
            <textarea name="textarea"
                      placeholder="Textarea"
                      ref={register({
                          required: true,
                      })}/>
            {errors.textarea?.type === "required" && (<p>This field is required</p>)}
            <input type="submit"/>
        </form>
    );
}
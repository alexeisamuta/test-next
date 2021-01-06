import React, {useEffect, useState} from "react"
import DatePicker from "react-datepicker"
import styles from "../styles/Timer.module.css"
import "react-datepicker/dist/react-datepicker.css"

export const Timer = () => {

    const [day, setDay] = useState<number>(0)
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [second, setSecond] = useState<number>(0)

    const [startDate, setStartDate] = useState<Date>(new Date());
    const now: Date = new Date()
    const gap = startDate.getTime() - now.getTime()

    useEffect(() => {
        if (gap < 0) {
            setDay(0)
            setHours(0)
            setMinutes(0)
            setSecond(0)
        } else {
            var id = window.setInterval(() => {
                setSecond(Math.floor(gap / 1000) % 60)
                setMinutes(Math.floor(gap / 1000 / 60) % 60)
                setHours(Math.floor(gap / 1000 / 60 / 60) % 24)
                setDay(Math.floor(gap / 1000 / 60 / 60 / 24))
            }, 1000)
        }
        return () => clearInterval(id)
    }, [gap])

    return (
        <div className={styles.allTimer}>
            <div className={styles.timer}>
                <div className={styles.timer_section}>
                    <div>{day}</div>
                    <div className={styles.timer_section_desc}>дней</div>
                </div>
                <div className={styles.timer_delimetr}>:</div>
                <div className={styles.timer_section}>
                    <div>{hours}</div>
                    <div className={styles.timer_section_desc}>часов</div>
                </div>
                <div className={styles.timer_delimetr}>:</div>
                <div className={styles.timer_section}>
                    <div>{minutes}</div>
                    <div className={styles.timer_section_desc}>минут</div>
                </div>
                <div className={styles.timer_delimetr}>:</div>
                <div className={styles.timer_section}>
                    <div>{second}</div>
                    <div className={styles.timer_section_desc}>секунд</div>
                </div>
            </div>
            <div className={styles.datePicker}>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
            </div>
        </div>

    )
}
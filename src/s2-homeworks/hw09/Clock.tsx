import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {

	const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined)
	// for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
	const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
	const [show, setShow] = useState<boolean>(false)
	const [disabled, setDisabled] = useState<boolean>(false)


	const start = () => {
		// пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
		// сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
		setDisabled(!disabled)

		let newTimerId = setInterval(() => {
			setDate(new Date(restoreState('hw9-date', Date.now()))); // Обновляем состояние `date` с текущей датой и временем
		}, 1000); // Обновлять каждую секунду
		// console.log(newTimerId)

		setTimerId(newTimerId); // Сохраняем идентификатор таймера в состоянии `timerId`
	};


	const stop = () => {
		// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
		setDisabled(!disabled)
		clearInterval(timerId)
		setTimerId(undefined)
	};


	const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
		// setShow(prev => !prev)
		setShow(true)

	}
	const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
		// setShow(prev => !prev)
		setShow(false)
	}

	// создал функцию, чтобы убрать дублирование .toString().padStart(2, '0')
	function formatWithZero(num: number) {
		return num.toString().padStart(2, '0');
	}

	// 1-й способ без дублирования .toString().padStart(2, '0')
	const stringTime = `${formatWithZero(date.getHours())}:${formatWithZero(date.getMinutes())}:${formatWithZero(date.getSeconds())}` ||
		<br/>
	const stringDate = `${formatWithZero(date.getDate())}:${formatWithZero(date.getMonth() + 1)}:${date.getFullYear()}` ||
		<br/>

	// 2-й способ
	// const stringTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}` ||
	// 	<br/>  // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
	// const stringDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}` ||
	// 	<br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

	// день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
	const stringDay = `${new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)}` || <br/> // пишут студенты
	const stringMonth = `${new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)}` || <br/> // пишут студенты

	return (
		<div className={s.clock}>
			<div
				id={'hw9-watch'}
				className={s.watch}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<span id={'hw9-day'}>{stringDay}</span>,{' '}
				<span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
			</div>

			<div id={'hw9-more'}>
				<div className={s.more}>
					{show ? (
						<>
							<span id={'hw9-month'}>{stringMonth}</span>,{' '}
							<span id={'hw9-date'}>{stringDate}</span>
						</>
					) : (
						<>
							<br/>
						</>
					)}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton
					id={'hw9-button-start'}
					disabled={disabled} // пишут студенты // задизэйблить если таймер запущен
					onClick={start}
				>
					start
				</SuperButton>
				<SuperButton
					id={'hw9-button-stop'}
					disabled={!disabled} // пишут студенты // задизэйблить если таймер не запущен
					onClick={stop}
				>
					stop
				</SuperButton>
			</div>
		</div>
	)
}

export default Clock

import React, { useRef } from 'react';
import { useState } from 'react';
import emoObject from '../../content';
import InnerItem from '../InnerItem/InnerItem';
import style from './main.module.css'


function Main(props) {
    const [emoValue, setEmoValue] = useState('')
    const [popupValue, setPopupValue] = useState({})
    const [tooltipValue, setTooltipValue] = useState({x: 0, y: 0, open: false})
    const mouseHandler = (e) => {

        let id = e.target.dataset.id
        let unit = document.getElementById(`${id}`)
        if(unit!==null){

            unit.style.strokeWidth = '400px'
            unit.style.zIndex = 5
        }
    }
    const mouseLeaveHandler = (e) => {
        let id = e.target.dataset.id
        let unit = document.getElementById(`${id}`)
        if(unit!==null) {

            unit.style.strokeWidth = '350px'
            unit.style.zIndex = 1
        }
    }
    const accordionHandler = (e) => {
        let elem = e.target
        let list = elem.nextSibling
        list.classList.toggle(style.open)
    }
    const popupClose = (e) => {
        let elem = document.querySelector(`.${style.popup}`)
        if(e.target === elem) {
            e.target.classList.remove(style.openPopup)
        }
    }
    const popupOpen = (e) => {
        let emo = e.target
        let elem =  document.querySelector(`.${style.popup}`)
        elem.classList.add(style.openPopup)
        let object = emoObject[emo.innerText]
        setEmoValue(emo.innerText)
        setPopupValue(object)
    }
    const circleHandler = (e) => {
        let [x,y] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
        setTooltipValue({...tooltipValue, x: x, y: y, open: true})
    }
    return (
        <main className={style.main}>
            <section className={style.contentBlock}>
                    <ul className={style.emoList}>
                        <li className={style.emoItem}>
                            <h2 onClick={accordionHandler} className={[style.emoHeading, style.purple].join(' ')}>Фиолетовый</h2>
                            <ul className={style.innerList}>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Отвращение</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Неудовольствие</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Скука</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Презрение</InnerItem>
                            </ul>
                        </li>
                        <li className={style.emoItem}>
                            <h2 onClick={accordionHandler} className={[style.emoHeading, style.blue].join(' ')}>Голубой</h2>
                            <ul className={style.innerList}>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Изумление</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Удивление</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Возбуждение</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Разочарование</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Горе</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Грусть</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Печаль</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Раскаяние</InnerItem>
                            </ul>
                        </li>
                        <li className={style.emoItem}>
                            <h2 onClick={accordionHandler} className={[style.emoHeading, style.green].join(' ')}>Зелёный</h2>
                            <ul className={style.innerList}>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Любовь</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Восхищение</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Доверие</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Принятие</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Покорность</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Ужас</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Страх</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Тревога</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Трепет</InnerItem>
                            </ul>
                        </li>
                    </ul>
                <div className={style.circleWrapper}>
                    <h2 style={{textAlign: 'center'}}>Твое колесо эмоций</h2>
                    <p>
                        Помоги себе обнаружить свою эмоцию и нажми на нее, чтобы прочитать подробнее
                    </p>
                    <div className={style.circle}>
                        <svg className={style.chart} width="700" height="700">
                            <circle id="1" className={style.unit} r="175" cx="50%" cy="50%">
                                
                            </circle>
                            <circle id="2"  className={style.unit} r="175" cx="50%" cy="50%"></circle>
                            <circle id="3" className={style.unit} r="175" cx="50%" cy="50%"></circle>
                            <circle id="4" className={style.unit} r="175" cx="50%" cy="50%"></circle>
                            <circle id="5" className={style.unit} r="175" cx="50%" cy="50%"></circle>
                            <circle id="6" className={style.unit} r="175" cx="50%" cy="50%"></circle>
                            <circle id="7" className={style.unit} r="175" cx="50%" cy="50%"></circle>
                            <circle id="8" className={style.unit} r="175" cx="50%" cy="50%"></circle>
                            <circle  className={style.center} r="30" cx="50%" cy="50%"></circle>
                            <foreignObject  x="430" y="330" width="300" height="300">
                                <ul data-id="1" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listGreen, style.list].join(' ')}>
                                    <li>Любовь</li>
                                    <li>Доверие</li>
                                    <li>Принятие</li>
                                    <li>Восхищение</li>
                                    <li>Покорность</li>
                                </ul>
                            </foreignObject>
                            <foreignObject x="275" y="470" width="300" height="300">
                                <ul data-id="2" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listLightGreen, style.list].join(' ')}>
                                    <li>Ужас</li>
                                    <li>Страх</li>
                                    <li>Трепет</li>
                                    <li>Тревога</li>
                                </ul>
                            </foreignObject>
                            <foreignObject x="50" y="450" width="300" height="300">
                                <ul data-id="3" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listBlue, style.list].join(' ')}>
                                    <li>Изумление</li>
                                    <li>Удивление</li>
                                    <li>Возбуждение</li>
                                    <li>Разочарование</li>
                                </ul>
                            </foreignObject>
                            <foreignObject x="-20" y="260" width="300" height="300">
                                <ul data-id="4" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listLightBlue, style.list].join(' ')}>
                                    <li>Горе</li>
                                    <li>Грусть</li>
                                    <li>Печаль</li>
                                    <li>Раскаяние</li>
                                </ul>
                            </foreignObject>
                            <foreignObject  x="-35" y="120" width="300" height="300">
                                <ul data-id="5" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listPurple, style.list].join(' ')}>
                                    <li>Неудовольствие</li>
                                    <li>Отвращение</li>
                                    <li>Презрение</li>
                                    <li>Скука</li>
                                </ul>
                            </foreignObject>
                            <foreignObject x="80" y="0" width="300" height="300">
                                <ul data-id="6" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listRed, style.list].join(' ')}>
                                    <li>Агрессия</li>
                                    <li>Досада</li>
                                    <li>Злость</li>
                                    <li>Гнев</li>
                                </ul>
                            </foreignObject>
                            <foreignObject  x="235" y="10" width="300" height="300">
                                <ul data-id="7" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listOrange, style.list].join(' ')}>
                                    <li>Настороженность</li>
                                    <li>Ожидание</li>
                                    <li>Интерес</li>
                                </ul>
                            </foreignObject>
                            <foreignObject x="380" y="100" width="300" height="300">
                                <ul  data-id="8" onMouseLeave={mouseLeaveHandler} onMouseOver={mouseHandler} className={[style.listYellow, style.list].join(' ')}>
                                    <li>Безмятежность</li>
                                    <li>Оптимизм</li>
                                    <li>Восторг</li>
                                    <li>Радость</li>
                                </ul>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
                <div className={style.mobileCircleWrapper}>
                    <h2 style={{textAlign: 'center'}}>Твое колесо эмоций</h2>
                    <p style={{width: '80%', padding: '1em', textAlign: 'center', margin: '0 auto'}}>
                        Помоги себе обнаружить свою эмоцию и нажми на нее, чтобы прочитать подробнее
                    </p>
                    <div className={style.circle}>
                        <svg onMouseMove={circleHandler} className={style.chart} width="300" height="300">
                            <circle id="1" data-color="green" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle id="2" data-color="light-green" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle id="3" data-color="blue" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle id="4" data-color="light-blue" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle id="5" data-color="purple" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle id="6" data-color="red" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle id="7" data-color="orange" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle id="8" data-color="yellow" className={style.unit} r="75px" cx="50%" cy="50%"></circle>
                            <circle  className={style.center} r="38" cx="50%" cy="50%"></circle> 
                            <foreignObject>
                                <div style={{top: tooltipValue.y, left: tooltipValue.x}} className={tooltipValue.open ? style.tooltipOpen : style.tooltip}>
                                    <h2>color</h2>
                                    <div>list</div>
                                </div>
                            </foreignObject>
                        </svg>
                        
                    </div>
                </div>
                <ul className={[style.emoList, style.secondList].join(' ')}>
                <li className={style.emoItem}>
                            <h2 onClick={accordionHandler} className={[style.emoHeading, style.red].join(' ')}>Красный</h2>
                            <ul className={style.innerList}>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Гнев</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Злость</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Досада</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Агрессия</InnerItem>
                            </ul>
                        </li>
                        <li className={style.emoItem}>
                            <h2 onClick={accordionHandler} className={[style.emoHeading, style.orange].join(' ')}>Оранжевый</h2>
                            <ul className={style.innerList}>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Настороженность</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Ожидание</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Интерес</InnerItem>
                            </ul>
                        </li>
                        <li className={style.emoItem}>
                            <h2 onClick={accordionHandler} className={[style.emoHeading, style.yellow].join(' ')}>Жёлтый</h2>
                            <ul className={style.innerList}>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Оптимизм</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Восторг</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Радость</InnerItem>
                                <InnerItem popupOpen={popupOpen} className={style.innerItem}>Безмятежность</InnerItem>
                            </ul>
                        </li>
                </ul>
            </section>
            <div onClick={popupClose} className={style.popup}>
                <div className={style.popupBlock}>
                    <h2 className={style.popupHeading}>{emoValue}</h2>
                    <div className={style.info}>
                        <p><span style={{color: 'purple'}}>Функция: </span>{popupValue.function}</p>
                        <p><span style={{color: 'purple'}}>Триггеры: </span>{popupValue.trigger}</p>
                        <p><span style={{color: 'purple'}}>Мысли: </span>{popupValue.thoughts}</p>
                        <p><span style={{color: 'purple'}}>Симптомы: </span>{popupValue.symptoms}</p>
                        <p>Я принимаю это чувство, потому что разрешаю себе испытывать любые эмоции.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
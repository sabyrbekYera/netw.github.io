import React, { Component } from 'react'
import s from './Footer.module.css'
export default class Footer extends Component {
  render() {
    return (
      <div className={s.FooterFlex}>
        <div></div>
        <div class="one">
          <h1>О сервисе</h1>
          <p>Цены</p>
          <p>Возможности</p>
          <p>Примение</p>
          <p>Акций</p>
        </div>
        <div class="two">
          <h1>О компаний</h1>
          <p>Новости</p>
          <p>Карьера</p>
          <p>Партнерам</p>
          <p>Вакансия</p>
          <p>Контакты</p>
        </div>
        <div class="three">
          <h1>Мероприятие</h1>
          <p>Вебинар</p>
          <p>Конференция</p>
          <p>Offline мероприятие</p>
        </div>
      </div>
    )
  }
}

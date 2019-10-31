<template lang="pug">
  div
    header.header
      .container.header__container
        .header__user
          .user
            .user__avatar
              .avatar
                img(src="../images/content/user.jpg").avatar__pic
            .user__name Андрей Тутин
        h1.header__title Панель администрирования
        a.header__exit-link Выйти
    nav.nav
      .container.nav__container
        ul.nav__list
          li.nav__item.active
            a.nav__link.link Обо мне
          li.nav__item
            a.nav__link Работы
          li.nav__item
            a.nav__link Отзывы
    section.section.about
      .container.about__container
        .section__header
          h2.section-title.about__title Блок «Обо мне»
          a.about__link.link Добавить группу
            .about__link-logo
              .add-button
        .about__content
          .categories
            ul.categories__list
              li.categories__item
                .category-card
                  .category-card__header
                    input(type="text" placeholder="Название новой группы").category-card__title
                    a.category-card__confirm-btn
                      .confirm-button
                    a.category-card__decline-btn 
                      .decline-button
                  .category-card__skills
                    .skills
                      ul.skills__list
                  .category-card__footer
                    .new-skill
                      input(type="text" placeholder="Новый навык").new-skill__name
                      input(type="text" placeholder="100").new-skill__percent
                      span %
                      a.new-skill__add-btn
                        .add-button
              li.categories__item
                .category-card
                  .category-card__header
                    input(type="text" placeholder="Workflow").category-card__title
                    a.category-card__confirm-btn
                      .confirm-button
                    a.category-card__decline-btn 
                      .decline-button
                  .category-card__skills
                    .skills
                      ul.skills__list
                        li.skills__item
                          .skill
                            input(type="text" placeholder="Git").skill__name
                            input(type="text" placeholder="100").skill__percent
                            span %
                            a.skill__edit-btn
                              .edit-button
                            a.skill__delete-btn
                              .delete-button
                        li.skills__item
                          .skill
                            input(type="text" placeholder="Terminal").skill__name
                            input(type="text" placeholder="100").skill__percent
                            span %
                            a.skill__edit-btn
                              .edit-button
                            a.skill__delete-btn
                              .delete-button
                        li.skills__item
                          .skill
                            input(type="text" placeholder="Gulp").skill__name
                            input(type="text" placeholder="100").skill__percent
                            span %
                            a.skill__edit-btn
                              .edit-button
                            a.skill__delete-btn
                              .delete-button
                        li.skills__item
                          .skill
                            input(type="text" placeholder="Webpack").skill__name
                            input(type="text" placeholder="100").skill__percent
                            span %
                            a.skill__edit-btn
                              .edit-button
                            a.skill__delete-btn
                              .delete-button
                  .category-card__footer
                    .new-skill
                      input(type="text" placeholder="Новый навык").new-skill__name
                      input(type="text" placeholder="100").new-skill__percent
                      span %
                      a.new-skill__add-btn
                        .add-button
    section.section.works
      .container.works__container
        .section__header
          h2.section-title.works__title Блок «Работы»
        .works__content
          .add-work
            h3.add-work__title Редактирование работы
            form.add-work__form
              .add-work__column-left
                label.label.label--dwnld-pic
                  input(type="file" style="display: none" name="work-image" required).input__file
                  p Перетащите или загрузите <br> для загрузки изображения
                  a.form-btns__button.form-btns__button--bg Загрузить
              .add-work__column-right
                .form-row
                  label.label
                    span Название
                    input(type="text" name="work-name" required).input__name
                .form-row
                  label.label
                    span Cсылка
                    input(type="text" name="work-link" required).input__url
                .form-row
                  label.label
                    span Описание
                    input(type="textarea" name="work-description" required).input__description
                .form-row
                  label.label
                    span Добавление тега
                    input(type="text" name="work-tags" required).input__tags
                .form-row
                  .form-btns
                    button(type="reset").form-btns__button Отмена
                    button(type="submit").form-btns__button.form-btns__button--bg Добавить
          ul.works__list
            li.works__item
              .add-card
                a.add-card__btn
                  .add-card__logo
                p Добавить <br> работу
            li.works__item
              .work-card
                .work-card__pic
                  img(src="../images/content/1.jpg").work-card__pic-img
                .work-card__content
                  h3.work-card__title Сайт школы образования
                  .work-card__desc  Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 2 месяца только самых тяжёлых испытаний и бессонных ночей!
                  a.work-card__link.link http://loftschool.ru
                  .card-btns
                    a.card-btns__edit Править
                      .card-btns__edit-btn
                        .edit-button
                    a.card-btns__delete Удалить
                      .card-btns__delete-btn
                        .delete-button
            li.works__item
              .work-card
                .work-card__pic
                  img(src="../images/content/2.jpg").work-card__pic-img
                .work-card__content
                  h3.work-card__title Сайт школы образования
                  .work-card__desc  Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 2 месяца только самых тяжёлых испытаний и бессонных ночей!
                  a.work-card__link.link http://loftschool.ru
                  .card-btns
                    a.card-btns__edit Править
                      .card-btns__edit-btn
                        .edit-button
                    a.card-btns__delete Удалить
                      .card-btns__delete-btn
                        .delete-button
    section.section.reviews
      .container.reviews__container
        .section__header
          h2.section-title.reviews__title Блок «Отзывы»
        .reviews__content
          .add-comment
            h3.add-comment__title Новый отзыв
            form.add-comment__form
              .add-comment__column-left
                label.label.label--dwnld-pic
                  input(type="file" style="display: none" name="author-photo").input__file
                  p.link Добавить фото
              .add-comment__column-right
                .form-row
                  label.label
                    span Имя автора
                    input(type="text" placeholder="Дмитрий Ковальчук" name="author-name" required).input__name
                  label.label
                    span Титул автора
                    input(type="text" placeholder="Основатель Loftschool" name="author-titul" required).input__url
                .form-row
                  label.label
                    span Отзыв
                    input(type="text" name="comment" placeholder="Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 2 месяца только самых тяжёлых испытаний и бессонных ночей!" required).input__url
                .form-row
                  .form-btns
                    button(type="reset").form-btns__button Отмена
                    button(type="submit").form-btns__button.form-btns__button--bg Добавить
          ul.comments__list
            li.comments__item
              .add-card
                a.add-card__btn
                  .add-card__logo
                p Добавить <br> отзыв
            li.comments__item
              .comment-card
                .author
                  .author__avatar
                    .avatar
                      img(src="../images/content/user.jpg")
                  .author__info
                    .author__name Ковальчук Дмитрий
                    .author__business Основатель Loftschool
                .comment
                  p Этот парень проходил обучение веб-разработке не где-то, а в Loftschool! 2 месяца только самых тяжёлых испытаний и бессонных ночей!
                .card-btns
                  a.card-btns__edit Править
                    .card-btns__edit-btn
                      .edit-button
                  a.card-btns__delete Удалить
                    .card-btns__delete-btn
                      .decline-button
            li.comments__item
              .comment-card
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/*.pcss";

  .container  {
    margin: 0 auto;
    width: 95%;
    max-width:1080px;
  }

  .header {
    padding: 16px 0;
    background-image: linear-gradient(90deg, #3d3d59 0%, #444472 100%);

    &__container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__user {
      margin-right: 28px;
    }

    &__title {
      font-size: 14px;
      color: #ffffff;
      opacity: .9;
      font-weight: 400;
    }

    &__exit-link {
      margin-left: auto;
      font-size: 16px;
      color: #ffffff;
      font-weight: 400;
      text-decoration: underline;
    }
  }

  .user {
    display: flex;
    align-items: center;

    &__avatar {
      width: 45px;
      height: 45px;
      margin-right: 20px;
    }

    &__name {
      font-size: 18px;
      color: #ffffff;
      font-weight: 600;
    }
  }

  .avatar {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  .nav {
    background: #fdfdfd;

    &__container {
      display: flex;
    }

    &__list {
      display: flex;
    }

    &__item {
      &:hover {
        border-bottom: 3px solid #383bcf;
      }
    }

    &__link {
      display: block;
      padding: 30px;
      font-size: 16px;
      color: #000;
      font-weight: 600;
    }

    .active {
      border-bottom: 3px solid #383bcf;
    }
  }

  .link {
    font-size: 16px;
    color: #383bcf;
    font-weight: 600;
  }

  .section {
    background: #f7f9fd;
  }

  .section__header {
    padding: 60px 0;
    display: flex;
    align-items: center;
  }

  .section-title {
    font-size: 21px;
    color: #414c63;
    font-weight: 700;
  }
  
  .add-button {
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 50%; top: 50%;
      width: 2px; height: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
    }

    &:before {
      content: "";
      position: absolute;
      left: 50%; top: 50%;
      width: 50%; height: 2px;
      transform: translate(-50%, -50%);
      background: #fff;
    }
  }

  .confirm-button {
    display: block;
    width: 100%;
    height: 100%;
    background: url('../images/content/tick.png') center center no-repeat / contain;
  }

  .decline-button {
    display: block;
    width: 100%;
    height: 100%;
    background: url('../images/content/cross.png') center center no-repeat / contain;
  }

  .edit-button {
    display: block;
    width: 100%;
    height: 100%;
    background: url('../images/content/pencil.png') center center no-repeat / contain;
  }

  .delete-button {
    display: block;
    width: 100%;
    height: 100%;
    background: url('../images/content/trash.png') center center no-repeat / contain;
  }

  .about {
    margin-top: -2px;
    padding-bottom: 32px;
    display: flex;
    
    &__container {
      align-self: stretch;
      display: flex;
      flex-direction: column;
    }

    &__title {
      margin-right: 60px;
    }

    &__link {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      &-logo {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        margin-right: 13px;
      }
    }

    &__content {
      flex: 1;
    }
  }

  input {
    border: 1px solid transparent;
    outline: transparent;

    &:focus {
      border-bottom: 1px solid black;
    }
  }

  .categories {
    height: 100%;

    &__list {
      height: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-content: space-between;
    }

    &__item {
        width: calc(50%-15px);
        height: 387px;
        padding: 20px;
        filter: drop-shadow(4.096px 2.868px 10px rgba(0,0,0,0.07));
        background-color: #ffffff;
        margin-bottom: 30px;

        &:last-child, &:nth-child(odd) {
          margin-bottom: 0;
        }
    }
  }

  .category-card {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__header { 
      padding: 10px;
      border-bottom: 1px solid #1f232d;
      display: flex;
      align-items: center;
    }

    &__title {
      width: 273px;
      padding-bottom: 15px;
      font-size: 18px;
      color: #414c63;
      font-weight: 600;
    }

    &__confirm-btn {
      margin-left: auto;
      margin-right: 20px;
    }

    &__confirm-btn, &__decline-btn {
      width: 15px;
      height: 15px;
    }

    &__skills {
      flex: 1;
    }
  }

  .skills {
    height: 100%;
    padding: 30px 10px;

    &__list {
      height: 100%;
    }

    &__item {
      margin-bottom: 30px;
    }
  }

  .skill {
    display: flex;
    align-items:center;


    &__name {
      border: none;
    }

    &__percent {
      margin-left: auto;
      width: 30px;
      margin-right: 15px;
      border: none;
    }

    span {
      //margin-right: 100px;
    }

    &__edit-btn {
      margin-left: 62px;
      margin-right: 20px;
    }

    &__edit-btn, &__delete-btn {
      width: 15px;
      height: 15px;
    }
  }

  .new-skill {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;

    &__name {
      width: 218px;
      border: none;
      margin-right: 10px;
      padding: 10px 20px;
    }

    &__percent {
      width: 50px;
      border: none;
    }

    span {
      margin-right: 20px;
    }

    &__add-btn {
      width: 40px;
      height: 40px;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .works {
    padding-bottom: 60px;
  }

  .add-work {
    filter: drop-shadow(4.096px 2.868px 10px rgba(0,0,0,0.07));
    background: #fff;
    padding: 0 30px;
    margin-bottom: 50px;

    &__title {
      padding: 30px 30px;
      border-bottom: 1px solid black;
    }

    &__form {
      display: flex;
      justify-content: space-between;
    }

    &__column-left, &__column-right {
      width: 48%;
    }

    &__column-left {
      padding: 50px 0;
      display: flex;
      flex-direction: column;
    }

    &__column-right {
      padding: 50px 0;
      display: flex;
      flex-direction: column;
    }
  }

  .label {
    flex: 1;
    display: flex;
    flex-direction: column;

    &--dwnld-pic {
      justify-content: center;
      align-items: center;
      max-height: 275px;
      cursor: pointer;
      background-color: #dee4ed;
      border: 1px dashed #a1a1a1;
      margin-bottom: 0;

      p {
        margin-bottom: 50px;
      }
    }
  }

  .form-row {
    display: flex;
    margin-bottom: 30px;
      
  }

  
  .form-btns {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  
    &__button {
        background: transparent;
        font-size: 16px;
        font-family: "Open Sans";
        font-weight: 700;
        padding: 9px 32px;
        border-radius: 40px;
        font-size: 16px;
        color: #383bcf;
        text-transform: uppercase;

        &--bg {
          background-image: linear-gradient(90deg, #3056e8 0%, #4c87ee 100%);
          color: #fff;
        }
      }
    }

  

  .input__tags, .input__name, .input__url, .input__description {
    padding: 10px 0;
  }

  .input__description {
    min-height: 145px;
  }

  .works__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
  }

  .works__item {
    width: 340px;
    height: 600px;
    margin-bottom: 30px;
    background: #fff;
    filter: drop-shadow(4.096px 2.868px 10px rgba(0,0,0,0.07));

    &:last-child, &:nth-child(odd) {
      margin-bottom: 0;
    }
  }

  .add-card {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 18px;
      line-height: 30px;
      color: #ffffff;
      font-weight: 700;
      text-align: center;
    }
    

    &__logo {
      display: block;
      width: 150px;
      height: 150px;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid white;
      margin-bottom: 30px;

      &:after {
        content: "";
        position: absolute;
        left: 50%; top: 50%;
        width: 2px; height: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
      }

      &:before {
        content: "";
        position: absolute;
        left: 50%; top: 50%;
        width: 50%; height: 2px;
        transform: translate(-50%, -50%);
        background: #fff;
      }
    }
  }

  .work-card {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__pic {
      margin-bottom: 30px;
    }

    &__title {
      font-size: 18px;
      color: #414c63;
      font-weight: 700;
      margin-bottom: 30px;
    }

    &__desc {
      font-size: 16px;
      line-height: 30px;
      color: #414c63;
      font-family: "Open Sans";
      font-weight: 600;
      margin-bottom: 30px;
    }

    &__link {
      display: block;
      margin-bottom: 40px;
    }

    &__content {
      padding: 0 20px;
      flex: 1;
    }
  }

  .card-btns {
      width: 100%;
      display: flex;
      justify-content: space-between;

    &__edit, &__delete {
      display: flex;
      align-items:center;
    }

    &__edit-btn, &__delete-btn {
      width: 15px;
      height: 15px;
      margin-left: 10px;
    }
  }

  .reviews {
    
    &__header {
      padding: 60px 0;
    }
  }

  .add-comment {
    filter: drop-shadow(4.096px 2.868px 10px rgba(0,0,0,0.07));
    background: #fff;
    padding: 0 30px;
    margin-bottom: 50px;

    &__title {
      padding: 30px 30px;
      border-bottom: 1px solid black;
    }

    &__form {
      display: flex;
      justify-content: space-between;
    }

    &__column-left {
      padding: 50px 0;
      width: 25%;
    }

    &__column-right {
      padding: 50px 0;
      width: 70%;
      display: flex;
      flex-direction: column;
      padding-right: 200px;
    }

    &__row {
      display: flex;
      margin-bottom: 30px;

      &:last-child {
        justify-content: flex-end;
      }
    }

    &__label {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .comments__list {
    height: 1000px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
  }

  .comments__item {
    width: 340px;
    height: 380px;
    margin-bottom: 30px;
    background: #fff;
    filter: drop-shadow(4.096px 2.868px 10px rgba(0,0,0,0.07));

    &:last-child, &:nth-child(odd) {
      margin-bottom: 0;
    }

    &--add {
      background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .comment-card {
    height: 100%;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .author {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #dedee0;

    &__avatar {
        flex-shrink: 0;
        width: 75px;
        height: 75px;
        margin-right: 10px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    &__name {
      font-size: 18px;
      color: #414c63;
      font-weight: 700;
    }

    &__business {
      font-size: 16px;
      color: #414c63;
      font-weight: 600;
    }
  }
</style>
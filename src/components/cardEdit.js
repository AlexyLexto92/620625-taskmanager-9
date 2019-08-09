export const getComponentCardEdit = () => (`
  <article class="card card--edit card--black">
    <form class="card__form" method="get">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--archive"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                архив
              </font></font></button>
              <button type="button" class="card__btn card__btn--favorites card__btn--disabled"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                избранное
             </font></font></button>
           </div>

            <div class="card__color-bar">
             <svg width="100%" height="10">
                <use xlink:href="#wave"></use>
             </svg>
            </div>

            <div class="card__textarea-wrap">
             <label>
              <textarea class="card__text" placeholder="Start typing your text here..." name="text">This is example of new task, you can add picture, set date and time, add tags.</textarea>
             </label>
            </div>

            <div class="card__settings">
             <div class="card__details">
               <div class="card__dates">
                 <button class="card__date-deadline-toggle" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                   дата: </font></font><span class="card__date-status"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">нет</font></font></span>
                 </button>

                 <fieldset class="card__date-deadline" disabled="">
                   <label class="card__input-deadline-wrap">
                    <input class="card__date" type="text" placeholder="23 September" name="date">
                   </label>
                 </fieldset>

              <button class="card__repeat-toggle" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                повторить: </font></font><span class="card__repeat-status"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">нет</font></font></span>
              </button>

              <fieldset class="card__repeat-days" disabled="">
                <div class="card__repeat-days-inner">
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-1" name="repeat" value="mo">
                  <label class="card__repeat-day" for="repeat-mo-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">мо</font></font></label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-1" name="repeat" value="tu" checked="">
                  <label class="card__repeat-day" for="repeat-tu-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">вт</font></font></label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-1" name="repeat" value="we">
                  <label class="card__repeat-day" for="repeat-we-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">мы</font></font></label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-1" name="repeat" value="th">
                  <label class="card__repeat-day" for="repeat-th-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">го</font></font></label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-1" name="repeat" value="fr" checked="">
                  <label class="card__repeat-day" for="repeat-fr-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">фр</font></font></label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" name="repeat" value="sa" id="repeat-sa-1">
                  <label class="card__repeat-day" for="repeat-sa-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">са</font></font></label>
                  <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-1" name="repeat" value="su" checked="">
                  <label class="card__repeat-day" for="repeat-su-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">су</font></font></label>
                </div>
              </fieldset>
           </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list"></div>

               <label>
                <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here">
               </label>
              </div>
            </div>

          <div class="card__colors-inner">
           <h3 class="card__colors-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">цвет</font></font></h3>
            <div class="card__colors-wrap">
             <input type="radio" id="color-black-1" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" checked="">
              <label for="color-black-1" class="card__color card__color--black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">черный</font></font></label>
              <input type="radio" id="color-yellow-1" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow">
              <label for="color-yellow-1" class="card__color card__color--yellow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">желтый</font></font></label>
              <input type="radio" id="color-blue-1" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue">
              <label for="color-blue-1" class="card__color card__color--blue"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">синий</font></font></label>
              <input type="radio" id="color-green-1" class="card__color-input card__color-input--green visually-hidden" name="color" value="green">
              <label for="color-green-1" class="card__color card__color--green"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">зеленый</font></font></label>
              <input type="radio" id="color-pink-1" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink">
              <label for="color-pink-1" class="card__color card__color--pink"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">розовый</font></font></label>
            </div>
          </div>
      </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">спасти</font></font></button>
          <button class="card__delete" type="button"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">удалять</font></font></button>
        </div>
      </div>
    </form>
  </article>
          `);

export const getComponentCard = () => (
  `
  <article class="card card--black">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    редактировать
                  </font></font></button>
                  <button type="button" class="card__btn card__btn--archive"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    архив
                  </font></font></button>
                  <button type="button" class="card__btn card__btn--favorites card__btn--disabled"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                    избранное
                  </font></font></button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Пример задания по умолчанию с цветом по умолчанию.</font></font></p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">23 сентября </font></font></span>
                          <span class="card__time"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">23:15</font></font></span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        <span class="card__hashtag-inner">
                          <span class="card__hashtag-name"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                            #todo
                           </font></font></span>
                        </span>

                        <font style="vertical-align: inherit;"><span class="card__hashtag-inner"><span class="card__hashtag-name"><font style="vertical-align: inherit;">
                            #personal
                           </font></span></span><span class="card__hashtag-inner"><span class="card__hashtag-name"><font style="vertical-align: inherit;">
                            #important
                          </font></span></span></font><span class="card__hashtag-inner">
                          <span class="card__hashtag-name"><font style="vertical-align: inherit;"></font></span>
                        </span>

                        <span class="card__hashtag-inner">
                          <span class="card__hashtag-name"><font style="vertical-align: inherit;"></font></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          `
);

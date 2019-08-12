export const getComponentMenu = () => (`
   <section class="control__btn-wrap">
      <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden">
      <label for="control__new-task" class="control__label control__label--new-task"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ ДОБАВИТЬ НОВУЮ ЗАДАЧУ</font></font></label>
      <input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked="">
      <label for="control__task" class="control__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ЗАДАЧИ</font></font></label>
      <input type="radio" name="control" id="control__statistic" class="control__input visually-hidden">
      <label for="control__statistic" class="control__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">СТАТИСТИКА</font></font></label>
   </section>
`);

export const getComponentFilter = () => (`
<section class="main__filter filter container">
 <input type="radio" id="filter__all" class="filter__input visually-hidden" name="filter" checked="">
 <label for="filter__all" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 Все </font></font><span class="filter__all-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></span></label>
 <input type="radio" id="filter__overdue" class="filter__input visually-hidden" name="filter" disabled="">
 <label for="filter__overdue" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Просрочено </font></font><span class="filter__overdue-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
 <input type="radio" id="filter__today" class="filter__input visually-hidden" name="filter" disabled="">
 <label for="filter__today" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Сегодня </font></font><span class="filter__today-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
 <input type="radio" id="filter__favorites" class="filter__input visually-hidden" name="filter" disabled="">
 <label for="filter__favorites" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Избранное </font></font><span class="filter__favorites-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
 <input type="radio" id="filter__repeating" class="filter__input visually-hidden" name="filter" disabled="">
 <label for="filter__repeating" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Повторять </font></font><span class="filter__repeating-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
 <input type="radio" id="filter__tags" class="filter__input visually-hidden" name="filter" disabled="">
 <label for="filter__tags" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Теги </font></font><span class="filter__tags-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span></label>
 <input type="radio" id="filter__archive" class="filter__input visually-hidden" name="filter">
 <label for="filter__archive" class="filter__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Архив </font></font><span class="filter__archive-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">115</font></font></span></label>
</section>
`);

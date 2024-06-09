/**
 * @param type По коду или по id.
 * @param titles Код или id.
 * @param filter Список значений, которые будут в ответе.
 * @param remove 	Список значений, которые будут удалены из ответа.
 */
export interface TitleParams {
  type: 'code' | 'id';
  title: string;
  filter?: string[];
  remove?: string[];
}

/**
 * @param type По коду или по id.
 * @param titlesList Массив значений.
 * @param filter Список значений, которые будут в ответе.
 * @param remove 	Список значений, которые будут удалены из ответа.
 */
export interface ListOfTitlesParams {
  type: 'code' | 'id';
  titlesList: string[];
  filter?: string[];
  remove?: string[];
}

/**
 * @param query Поиск по именам и описанию.
 * @param year 	Список годов выхода.
 * @param genres Список жанров.
 * @param filter Список значений, которые будут в ответе.
 * @param remove 	Список значений, которые будут удалены из ответа.
 * @param limit Количество объектов в ответе. По умолчанию 5.
 * @param pagination Номер страницы и количество элементов на странице.
 */
export interface SearchParams {
  query: string;
  year?: string;
  genres?: string[];
  filter?: string[];
  remove?: string[];
  limit?: number;
  pagination?: {
    page: number;
    pageSize: number;
  };
}

/**
 * @param filter Список значений, которые будут в ответе.
 * @param remove 	Список значений, которые будут удалены из ответа.
 * @param include Список типов файлов, которые будут возвращены в виде base64 строки. [Подробнее](https://github.com/anilibria/docs/blob/master/api_v2.md#include)
 * @param limit Количество объектов в ответе. По умолчанию 5.
 * @param since Список тайтлов, у которых время обновления больше указанного timestamp.
 * @param description_type Тип получаемого описания. [Подробнее](https://github.com/anilibria/docs/blob/master/api_v2.md#description_type)
 * @param playlist_type Формат получаемого списка серий. "object" | "array"
 * @param after Удаляет первые n записей из выдачи.
 * 
*/
export interface FeedParams {
  filter?: string[];
  remove?: string[];
  include?: string[];
  limit?: number;
  since?: number;
  description_type?: 'html' | 'plain' | 'no_view_order';
  playlist_type?: "object" | "array";
  after?: number;
}

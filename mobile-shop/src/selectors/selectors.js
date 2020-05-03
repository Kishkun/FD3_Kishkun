import * as R from "ramda";
import {equals} from "ramda";

export const getPhoneById = (state, id) => {
    return R.prop(id, state.phones)   //return state.phones[id]
};

export const getActiveCategoryId = (ownProps) => {
    // ищет конкретно id по цепочку внутри
    return R.path(["match", "params", "id"], ownProps);
};

export const getPhones = (state, ownProps) => {
    const activeCategoryId = getActiveCategoryId(ownProps);
    const applySearch = (item) => {
        return(
            R.contains(
                // contains проверяет есть ли 1 аргумент во 2( true, false)
                state.phonesPage.search,
                // item.name
                R.prop("name", item)
            )
        )
    };
    const applyCategory = (item) => {
      return(
          R.equals(
              activeCategoryId,
              R.prop("categoryId", item)
          )
      )
    };
    const phones = R.compose(
        R.filter(applySearch),
        // если первая функция true, тогда выполняется вторая
        R.when(R.always(activeCategoryId), R.filter(applyCategory)),
        R.map(id => getPhoneById(state, id))
    )(state.phonesPage.ids);

    return phones;
    // const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids);
    // return phones;
};

export const getRendererLoadLength = (state) => {
    return R.length(state.phonesPage.ids);
};

export const getTotalBasketCount = (state) => {
    return R.length(state.basket);
};

export const getTotalBasketPrice = (state) => {
    const totalPrice = R.compose(
        // суммируем все цены
        R.sum,
        // берем цену с каждого обьякта(масси цен)
        R.pluck("price"),
        // переобразуем массив id в массив тедефонов
        R.map(id => getPhoneById(state, id))
    )(state.basket);

    return totalPrice;
};

export const getCategories = (state) => {
    // возввращаем все значения категорий
    return R.values(state.categories);
};
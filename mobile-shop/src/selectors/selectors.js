import * as R from "ramda";

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
        return (
            R.contains(
                // contains проверяет есть ли 1 аргумент во 2( true, false)
                R.toLower(state.phonesPage.search),
                // item.name
                R.toLower(R.prop("name", item))
            )
        )
    };
    const applyCategory = (item) => {
        return (
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

export const getVisiblePhones = (state, ownProps) => {
    const visiblePhones = getPhones(state, ownProps);
    return R.slice(0, state.phonesPage.phonesCount, visiblePhones);
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

export const getBasketPhonesWithCount = (state) => {
    const phoneCount = (id) => {
        return (
            R.compose(
                R.length,
                // ищем id которые совпадают
                R.filter(basketId => R.equals(id, basketId))
            )(state.basket)
        )
    };
    // в каждый телефон добавляем(создаем) поле count
    const phoneWithCount = (phone) => {
        return (
            R.assoc("count", phoneCount(phone.id), phone)
        )
    };
    // находим уникальные id с корзины
    const uniqueIds = R.uniq(state.basket);
    const phones = R.compose(
        R.map(phoneWithCount),
        R.map(id => getPhoneById(state, id))
    )(uniqueIds);

    return phones
};
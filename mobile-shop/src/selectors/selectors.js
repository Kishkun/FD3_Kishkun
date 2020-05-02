import * as R from "ramda";

export const getPhoneById = (state, id) => {
    return R.prop(id, state.phones)   //return state.phones[id]
};

export const getPhones = (state) => {
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
    const phones = R.compose(
        R.filter(applySearch),
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
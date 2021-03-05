import React from 'react'
import {Provider} from 'react-redux'
import store from '../../p2-homeworks/h10/bll/store'

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={store}>{storyFn()}</Provider>
}
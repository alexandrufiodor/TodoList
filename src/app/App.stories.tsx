import React from 'react'
import App from "./App";
import {Meta, Story} from "@storybook/react";
import {ReduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreProviderDecorator";

export default {
    title: 'App Component',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
} as Meta

// const Template: Story =() => <App/>
//
// export const AppBaseExample = Template.bind({})

export const AppBaseExample = () => {
    return <App/>
}
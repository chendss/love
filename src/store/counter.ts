import { observable, runInAction, action, autorun } from 'mobx'


class GlobalStore {
    constructor() { }
    @observable state = {}

}

const globalStore = new GlobalStore()
export default globalStore
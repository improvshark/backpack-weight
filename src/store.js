import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { unit, add} from 'mathjs'

export const defaultItem = {
	packed: false,
	value: unit('0 g')
}

export const store = createStore({
	state: {
		defaultUnit: 'g',
		listData: {},
		listOrder: [],
	},
	plugins: [createPersistedState()],
	mutations: {
		unshift(state, { key, value }) {
			state.listData[key] = value;
			state.listOrder.unshift(key);
		},
		push(state, { key, value }) {
			state.listData[key] = Object.assign(defaultItem, value);
			state.listOrder.push(key);
		},
		set(state, { key, value, packed }) {
			if (typeof value != 'undefined')
				state.listData[key].value = value
			if (typeof packed != 'undefined')
				state.listData[key].packed = packed
		},
		remove(state, { key }) {
			delete state.listData[key];
			state.listOrder.splice(state.listOrder.indexOf(key), 1);
		},
		sortData(state, callback) {
			state.listOrder = state.dataOrder.sortData(callback)
		},
		setOrder(state, order) {
			state.listOrder = order;
		}
	},
	actions: {},
	getters: {
		defaultUnit(state) {
			return state.defaultUnit 
		},
		getListPacked(state) {
			return state.listOrder
				.filter(key => state.listData[key].packed)
				.map(key => Object.assign(state.listData[key], {name: key}));
		},
		getListUnPacked(state) {
			return state.listOrder
				.filter(key => !state.listData[key].packed)
				.map(key => Object.assign(state.listData[key], {name: key}));
		},
		getList(state) {
			return state.listOrder.map(key => Object.assign(state.listData[key], {name: key}));
		},
		countUnpacked(state) {
			return state.listOrder
				.filter(key => !state.listData[key].packed)
				.length
		},
		count(state) {
			return state.listOrder.length
		},
		totalWeight(state) {
			return state.listOrder.reduce((total, key) => {
				const value = unit(state.listData[key].value)
				return add(total, value)
			}, unit('0 g'))
		},

	},
});

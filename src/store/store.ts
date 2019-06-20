import { getSnapshot, types } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';
import uuid from 'uuid';
import { Category } from './category';
import { Currency } from './currency';
import { Profile } from './profile';
import { Wallet } from './wallet';
import { DateTime } from 'luxon';

export const Store = types
  .model({
    loggined: false,
    queueSize: 0,
    last_sync: 0,
    profile: types.maybe(types.reference(Profile)),
    wallets: types.array(Wallet),
    currencies: types.array(Currency),
    categories: types.array(Category)
  })
  .actions(self => ({
    afterCreate() {
      const { wallets, categories, currencies } = initDemoData();
      self.categories.push(...categories);
      self.currencies.push(...currencies);
      self.wallets.push(...wallets);
    },
    walletCreate(values: IWallet) {
      self.wallets.push(
        Wallet.create({
          id: uuid(),
          name: values.name,
          type: 'cash',
          colour: values.colour,
          pockets: [],
          created_at: +DateTime.local(),
          updated_at: +DateTime.local()
        })
      );
    },
    categoryCreate(values: ICategory) {
      self.categories.push(
        Category.create({
          id: uuid(),
          name: values.name,
          type: values.type,
          created_at: +DateTime.local(),
          updated_at: +DateTime.local()
        })
      );
    },
    login() {
      self.loggined = true;
    },
    logout() {
      self.loggined = false;
    },
    save() {
      AsyncStorage.setItem('@MyMoney', JSON.stringify(getSnapshot(self)));
    }
  }));

export type IStore = typeof Store.Type;
export type IWallet = typeof Wallet.Type;
export type ICategory = typeof Category.Type;

export interface InjectedProps {
  store: IStore;
}

function initDemoData() {
  const currencies = [
    Currency.create({
      id: uuid(),
      name: 'UAH',
      symbol: '₴'
    }),
    Currency.create({
      id: uuid(),
      name: 'USD',
      symbol: '$'
    }),
    Currency.create({
      id: uuid(),
      name: 'EUR',
      symbol: '€'
    })
  ];
  const categories = [
    Category.create({
      id: uuid(),
      name: 'Food',
      type: 'outcome',
      created_at: +DateTime.local()
    }),
    Category.create({
      id: uuid(),
      name: 'Cloth',
      type: 'outcome',
      created_at: +DateTime.local()
    }),
    Category.create({
      id: uuid(),
      name: 'Salary',
      type: 'income',
      created_at: +DateTime.local()
    }),
    Category.create({
      id: uuid(),
      name: 'Transport',
      type: 'outcome',
      created_at: +DateTime.local()
    }),
    Category.create({
      id: uuid(),
      name: 'Communications',
      type: 'outcome',
      created_at: +DateTime.local()
    })
  ];
  categories.push(
    Category.create({
      id: uuid(),
      name: 'Meat',
      type: 'outcome',
      parent_id: categories[0].id,
      created_at: +DateTime.local()
    })
  );
  const wallets = [
    Wallet.create({
      id: uuid(),
      name: 'Cash',
      type: 'cash',
      colour: '#fff',
      pockets: [],
      created_at: +DateTime.local()
    }),
    Wallet.create({
      id: uuid(),
      name: 'Credit card',
      type: 'credit',
      colour: '#fff',
      pockets: [],
      created_at: +DateTime.local()
    })
  ];
  return {
    currencies,
    categories,
    wallets
  };
}

export default Store;

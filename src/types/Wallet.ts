import IPocket from './Pocket';

interface IWallet {
  id: string;
  name: string;
  color: string;
  icon: {
    name: string;
    type: 'FontAwesome' | 'FontAwesome5';
  };
  pockets: IPocket[];
}

export default IWallet;

interface ICategory {
  id: string;
  name: string;
  type: 'income' | 'outcome';
  parent_id: string;
}
export default ICategory;

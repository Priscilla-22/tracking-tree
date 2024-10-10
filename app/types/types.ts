export interface TreeItem {
  id: string;
  name: string;
  type: 'collection' | 'lot' | 'order' | 'delivery' | 'finalProduct';
  details: {
    [key: string]: string | number;
  };
  children?: TreeItem[];
}
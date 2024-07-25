// quarter.ts  
export interface Quarter {  
  id: string; // 可以是 'Q1', 'Q2', ...  
  name: string; // 季度名称  
  months: string[]; // 季度内的月份列表  
  // 其他可能的属性...  
}
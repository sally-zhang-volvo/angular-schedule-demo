export interface Quarter {  
  startDate: Date;  
  endDate: Date;  
  label: string;  
}  
  
export interface CalendarEvent {  
  id: string;  
  title: string;  
  start: Date;  
  end: Date;  
  color: {  
    primary: string;  
    secondary?: string;  
  };  
  resourceId: string; // 与资源相关联的 ID  
  // ... 其他属性  
}  
  
export interface Event {  
  id: string;  
  title: string;  
/*   color: {  
    primary: string;  
    secondary?: string;  
  };  */ 
  start:Date;
  end:Date;
  resourceId:string;
  // ... 其他属性  
}
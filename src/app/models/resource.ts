// resource.ts  
/* export interface Resource {  
    id: string;  
    title: string;  
    // 其他可能的属性...  
  }   */
    
    export interface Resource {  
    id: string;  
    title: string;  
    color: {  
      primary: string;  
      secondary?: string;  
    };  
  }  
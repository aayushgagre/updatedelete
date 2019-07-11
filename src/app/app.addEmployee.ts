import {Component} from '@angular/core';

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})


export class AddEmployeeComponent{
    empId:number;
    empName:string;
    empSalary:number;

    model:any={};
    myValue;
    empall:any[]=[
        {empId:1001,empName:"ABCD",empSalary:3333.33},
        {empId:1002,empName:"BCD",empSalary:3334.33},
        {empId:1003,empName:"CD",empSalary:3335.33}
    ];

    addEmployee():any{
        this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary});     
    }
    deleteEmployee(i:number):any{
        this.empall.splice(i,1);
        alert("deleted")
    }
    editEmployee(j:number):any{
        this.model.id=this.empall[j].empId;
        this.model.name=this.empall[j].empName;
        this.model.salary=this.empall[j].empSalary

        this.myValue=j;
    }
    updateEmployee(){
        let k=this.myValue;
        for(let i=0;i<this.empall.length;i++)
        {
            if(i==k)
            {
                this.empall[i].empId=this.model.id;
                this.empall[i].empName=this.model.name;
                this.empall[i].empSalary=this.model.salary;
            }
        }
        alert("Updated")
    }
    
}
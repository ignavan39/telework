import {store} from "@/store";
import {Action,Mutation, getModule, Module, VuexModule} from 'vuex-module-decorators';

@Module({store: store, name: 'NAME'})

class App extends VuexModule{

    private testArray: string[] = ["123"];
    private teachers :any = null;
    @Action
    public async fetchTeachers(): Promise<any>{
        await fetch('http://localhost:3000/api', {
        method : "GET",
    }).then(response => {
        console.log('2222');
        return response;
        //console.log(response);
    });
    }
    @Action
    public setTestArray():void{
        this.setTest(["123","123","78"])
    }
    @Mutation
    public setTest(messages: string[]){
        this.testArray = messages;
    }

    @Mutation
    public setTeachers(teachers:any): void{
        this.teachers = teachers;
    }

    get getTestArray(): string[]{
        return this.testArray
    }

    get getTeachers():any{
        return this.teachers;
    }
}

export { App };
export const appStore = getModule<App>(App);

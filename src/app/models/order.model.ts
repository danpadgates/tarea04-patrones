import { CPU } from './CPU.model';
import { Periferic } from './Periferic.model';

export class Order{
    constructor(
        public id:string,
        public total: number,
        public cpu: CPU,
        public periferics: Periferic[]
    ){}
}
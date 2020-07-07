import { Periferic } from './Periferic.model';

export class Keyboard extends Periferic{

    public static getKeyboards(): Keyboard[] {
        let keyboards: Keyboard[] = [];

        keyboards.push(new Keyboard(1, 180, "HyperX Alloy Core RGB", "https://images-na.ssl-images-amazon.com/images/I/719KBL6SNQL._AC._SR360,460.jpg"));
        keyboards.push(new Keyboard(2, 50, "Logitect k210", "https://images-na.ssl-images-amazon.com/images/I/815G-GZxcUL._AC_SX425_.jpg"));

        return keyboards;
    }

}
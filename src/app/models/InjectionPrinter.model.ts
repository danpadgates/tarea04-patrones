import { Periferic } from './Periferic.model';

export class InjectionPrinter extends Periferic{

    public static getPrinters(): InjectionPrinter[] {
        let printers: InjectionPrinter[] = [];

        printers.push(new InjectionPrinter(1, 300, "Envidia 4502", "https://m.media-amazon.com/images/I/51VJcmVWclL._AC_SS350_.jpg"));

        return printers;
    }
    
}
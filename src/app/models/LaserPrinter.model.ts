import { Periferic } from './Periferic.model';

export class LaserPrinter extends Periferic{

    public static getPrinters(): LaserPrinter[] {
        let printers: LaserPrinter[] = [];

        printers.push(new LaserPrinter(1, 430, "Impresora Hp Laser", "https://upload.wikimedia.org/wikipedia/commons/2/2c/LaserJet1012.jpg"));

        return printers;
    }
}
import { Periferic } from './Periferic.model';

export class GraphicTablet extends Periferic{

    public static getTablets(): GraphicTablet[] {
        let tablets: GraphicTablet[] = [];

        tablets.push(new GraphicTablet(1, 754, "Parblo Coast13", "https://images-na.ssl-images-amazon.com/images/I/610WeYDY-zL._AC_SX466_.jpg"));
        tablets.push(new GraphicTablet(2, 343, "Huion H1161", "https://images-na.ssl-images-amazon.com/images/I/611OUUycKzL._AC_SX466_.jpg"));
        tablets.push(new GraphicTablet(3, 620, "Turcom TS-6610", "https://images-na.ssl-images-amazon.com/images/I/61-TaerZjhL._AC_SX355_.jpg"));

        return tablets;
    }

}
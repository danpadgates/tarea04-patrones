import { Periferic } from './Periferic.model';

export class Mouse extends Periferic{

    public static getMouses(): Mouse[] {
        let mouses: Mouse[] = [];

        mouses.push(new Mouse(1, 90, "PICTEK", "https://images-na.ssl-images-amazon.com/images/I/61d9C4yCB2L._AC_SX466_.jpg"));
        mouses.push(new Mouse(2, 30, "Logitech M325", "https://images-na.ssl-images-amazon.com/images/I/91kf%2BKoNPYL._AC_SX466_.jpg"));
        mouses.push(new Mouse(3, 50, "Redragon M601 RGB", "https://images-na.ssl-images-amazon.com/images/I/61okxuhfKBL._AC_SX466_.jpg"));

        return mouses;
    }

}
export class CPU {
    constructor(
        public id: number,
        public price: number,
        public name: string,
        public image: string
    ) { }

    public static getCPUs(): CPU[] {
        let cpus: CPU[] = [];

        cpus.push(new CPU(1, 959, "Ryzen", "https://www.muycomputer.com/wp-content/uploads/2019/08/Ryzen-5-3500.jpg"));
        cpus.push(new CPU(2, 1999, "Intel i7", "https://www.sercoplus.com/13919-thickbox_default/procesador-intel-core-i7-9700-inc-video.jpg"));

        return cpus;
    }
}
/// <reference path="person.ts"/>

class Player implements IPerson {
    name: string = 'lll';
    age?: number;
    highScore?: number;

    formatName() {
        return this.name.toUpperCase();
    }
}

// 类会编译成实际有内容的文件
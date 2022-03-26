export interface IResult {
    playerName: string;
    score: number;
    problemCount: number;
    factor: number;
}
// TS 实现了结构类型系统（structural type system），只要结构匹配，
// 就可以将对象视为具有该结构的类型，也叫填鸭式

// 因为没有任何需要实现的方法，而且用对象字面量（object literal）实现接口
// 因此不需要类提供的其他功能，使用接口即可

// 接口只是编译器使用它们进行类型检查，它们不会被编译成 js 中的任何内容
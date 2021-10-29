interface UserInfo {
    username: String;
    password: String;
}

// const test1 : UserInfo = {
//     username: 'boost'
// };

type partial = Partial<UserInfo>;

// interface UserInfo {
//     username?: String;
//     password?: String;
// }

// const test1 :partial = {
//     name: 'boost'
// };


// const test2 : UserInfo = {
//     username: 'boost',
//     password: '******'
// }

type readonly = Readonly<UserInfo>;

const test2 : Readonly<UserInfo> = {
    username: 'boost',
    password: '******'
}

// interface UserInfo {
//     readonly name: String;
//     readonly age: number;
//     readonly address: String;
//     readonly email: String;
//     readonly username: String;
//     readonly password: String;
// }

type Username = 'sam' | 'json' | 'mike';

const record: Record<Username, number> = {
    sam: 1,
    json: 2,
    mike: 3
};

// Record<K,T>
// K의 속성들을 순회하면서 T로 타입을 초기화 시키는 문법

type userPick =  Pick<UserInfo, 'username'>;

const pick : Pick<UserInfo, 'username'> = {
    username: 'mike',
    // username 속성만 골라 가져와서 새로운 타입을 생성
}

type userOmit = Omit<UserInfo, 'username'>;
// username 속성을 뺀 속성을 가져와서 새로운 타입 생성

const omit: userOmit = {
    password: '********',
};


type T2 = Exclude<string | number, string>;

// Exclude<T, U>;
// T - U의 타입 차집합?
// T2 : number,


type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T5 = Extract<number, string | number>;  // number

// Extract<T, U>;
// T - U의 교집합

interface reUser {
    username: string,
    password?: string,
    email?: string
}

type require = Required<reUser>;

// Required<T>
// T 속성에 옵셔널을 다 때 줌


// NonNullable<T>
// T 속성에서 null과 undefined를 떼고 반환하는 타입


// Parameters<F>
// F에는 함수가 들어감
// F 함수에 들어갈 매개변수의 타입들을 튜플로 반환

const func = (arg1: string, arg2: number) :number => arg2;


type parameters = Parameters<typeof func>;

const T6 : parameters = ['12',2];


type returnType = ReturnType<typeof func>;
// 리턴타입을 받는 타입


// InstanceType<C>
// C는 Class
// C의 인스턴스를 타입으로 받는 타입

class Test2 {
    x = 3;
    y = 4;
    constructor() {
    }
}

type T7 = InstanceType<typeof Test2>;

const T8 : T7 = new Test2();


type constructor = ConstructorParameters<FunctionConstructor>;
// FunctionConstructor();

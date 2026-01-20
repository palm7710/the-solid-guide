export {};

// インターフェースは「形のルール」
// name は文字列で、getBonus(base:number)を持ってること」が必須条件になる
interface IEmployee {
  name: string;
  getBonus(base: number): number;
}

// implementsは、インターフェースの実装をする
class JuniorEmployee implements IEmployee {
  // 初期化（ほぼinit）
  constructor(public name: string) {}

  // getBonus というメソッドの実装
  getBonus(base: number): number {
    return Math.floor(base * 1.1);
  }
}

class MiddleEmployee implements IEmployee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 1.5);
  }
}

class SeniorEmployee implements IEmployee {
  constructor(public name: string) {}

  getBonus(base: number): number {
    return Math.floor(base * 2);
  }
}

function run() {
  const emp1 = new JuniorEmployee("Yamada");
  const emp2 = new MiddleEmployee("Suzuki");
  const emp3 = new SeniorEmployee("Tanaka");

  const base = 100;
  console.log(emp1.getBonus(base));
  console.log(emp2.getBonus(base));
  console.log(emp3.getBonus(base));
}

run();
